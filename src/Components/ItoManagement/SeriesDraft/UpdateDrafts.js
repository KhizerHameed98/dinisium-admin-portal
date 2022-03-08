import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSeriesDraftById,
  updateSeriesDraft,
} from "../../../Services/itoServices";
import moment from "moment";


const UpdateDrafts = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  const assignedItosData = useSelector(
    (state) => state.ito?.assignedItosData?.data
  );

  const updatedDrafts = useSelector(
    (state) => state?.ito?.GET_SERIESDRAFTS_BY_ID[0]
  );

  console.log("updatedDrafts", updatedDrafts);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData({
      name: updatedDrafts?.series_name,
      supply: updatedDrafts?.supply,
      start_date: updatedDrafts?.start_date,
      end_date: updatedDrafts?.end_date,
      description: updatedDrafts?.description,
      ito_id: updatedDrafts?.ito_id,
    });
  }, [updatedDrafts]);

  console.log("formData name", formData.name);

  const onSupplyChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getSeriesDraftById(id));
  }, []);

  const handleSeriesUpdateDraft = () => {
    setLoading(true);
    dispatch(updateSeriesDraft(formData, id, setLoading));
  };

  console.log("formdata", formData);
  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body p-5">
                <form className="form">
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Series Name</label>
                        <input
                          type="text"
                          placeholder="Series Name"
                          className="form-control"
                          name="name"
                          value={formData.name}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Supply</label>
                        <input
                          type="text"
                          placeholder="Supply"
                          className="form-control"
                          name="supply"
                          value={formData.supply}
                          onChange={(e) => onSupplyChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Select ITO</label>
                        <select
                          name="ito_id"
                          className="form-control"
                          onChange={onChange}
                          placeholder="Select Status"
                        >
                          <option value="">Select...</option>
                          {assignedItosData?.map((ito) => (
                            <option value={ito.id} key={ito.id}>
                              {ito.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label>Start Date</label>
                      <input
                        type="date"
                        placeholder="Start Date"
                        className="form-control"
                        name="start_date"
                        // value={formData.start_date}
                        value={moment(formData.start_date).format("YYYY-MM-DD")}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => onChange(e)}
                        onLoad={formData.start_date}
                      />
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>End Date</label>
                        <input
                          type="date"
                          placeholder="End Date"
                          className="form-control"
                          name="end_date"
                          value={moment(formData.end_date).format("YYYY-MM-DD")}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => onChange(e)}
                        />
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <label>Description</label>
                      <textarea
                        placeholder="Description"
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={(e) => onChange(e)}
                      ></textarea>
                    </div>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    // disabled={loading}
                  >
                    {/* {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}{" "} */}
                    CREATE NEW SERIES
                  </button>
                </form>
                <button
                  className="btn btn-primary btn-lg seriesdraft"
                  onClick={handleSeriesUpdateDraft}
                >
                  {/* {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}{" "} */}
                  UPDATE DRAFT
                </button>
                {/* <!-- Modal --> */}
                {/* <CreateSeriesModal show={show} setShow={setShow} /> */}
                {/* <!--end Modal --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateDrafts;
