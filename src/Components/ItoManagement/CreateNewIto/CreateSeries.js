import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CreateNewSeries = ({
  formData,
  setFormData,
  rest: { match },
  isSubscription,
  isRequired,
  setIsRequired,
  saveAsDraft,
  setSaveAsDraft,
  updatedrafts,
  location,
  updatedData,
  seriesName,
  seriesSupply,
  series_start_date,
  series_end_date,
  descriptionnn,
  // draftUpdatedData,
  // setDraftUpdatedData,
}) => {
  const {
    series,
    series: { name, start_date, end_date, description, supply },
  } = formData;

  const defaultValues = {
    ito_seriesnamee: updatedData?.ito_series,
    series_supplyy: updatedData?.series_Supply,
    start_datee: updatedData?.series_start_data,
    end_datee: updatedData?.series_end_data,
    descriptionn: updatedData?.series_description,
  };

  const [draftUpdatedData, setDraftUpdatedData] = useState(defaultValues);

  const subscriptionDetail = useSelector(
    (state) => state.subscription?.subscriptionDetail || {}
  );

  const onChange = (e) => {
    console.log(formData);
    setFormData({
      ...formData,
      series: { ...series, [e.target.name]: e.target.value },
    });
    setDraftUpdatedData({
      ...draftUpdatedData,
      [e.target.name]: e.target.value,
    });
  };

  const onSupplyChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setFormData({
        ...formData,
        series: { ...series, [e.target.name]: e.target.value },
      });
      setDraftUpdatedData({
        ...draftUpdatedData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const id = useParams();

  const all = Object.assign({}, ...updatedrafts);

  const { namee, supplyy, start_datee, end_datee, descriptionn } =
    draftUpdatedData;
  console.log("name", namee);

  return (
    <>
      <div className="col-md-12">
        <div className="card mb-4">
          <div className="card-header series-card-header">
            Initial ITO Series
          </div>
          <div className="card-body p-5">
            {/* <form className="form"> */}
            <div className="form-group row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Series Name</label>
                  <input
                    type="text"
                    placeholder="Series Name"
                    className="form-control"
                    // name="name"
                    name={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? "name"
                        : "ito_seriesnamee"
                    }
                    value={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? name
                        : subscriptionDetail.ito_series
                    }
                    // value={name}
                    ref={seriesName}
                    disabled={isSubscription}
                    onChange={(e) => onChange(e)}
                    required={isRequired}
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
                    // name="supply"
                    name={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? "supply"
                        : "series_supplyy"
                    }
                    // value={supply}
                    value={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? supply
                        : draftUpdatedData.series_supplyy
                    }
                    // disabled={isSubscription}
                    ref={seriesSupply}
                    onChange={(e) => onSupplyChange(e)}
                    required={isRequired}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <label>Start Date</label>
                <input
                  type="date"
                  placeholder="Start Date"
                  className="form-control"
                  // name="start_date"
                  name={
                    location.pathname === "/admin/ito-management/create-new-ito"
                      ? "start_date"
                      : "start_datee"
                  }
                  disabled={isSubscription}
                  value={
                    location.pathname ===
                    "/admin/ito-management/create-new-ito" ? (
                      start_date
                    ) : (
                      <Moment format="DD/MM/YYYY">
                        {draftUpdatedData.start_datee}
                      </Moment>
                    )
                  }
                  // value={start_date}
                  onChange={(e) => onChange(e)}
                  ref={series_start_date}
                  required={isRequired}
                />
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="date"
                    placeholder="End Date"
                    className="form-control"
                    // name="end_date"
                    name={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito"
                        ? "end_date"
                        : "end_datee"
                    }
                    disabled={isSubscription}
                    value={
                      location.pathname ===
                      "/admin/ito-management/create-new-ito" ? (
                        end_date
                      ) : (
                        <Moment format="DD/MM/YYYY">
                          {draftUpdatedData.end_datee}
                        </Moment>
                      )
                    }
                    // value={end_date}
                    onChange={(e) => onChange(e)}
                    ref={series_end_date}
                    required={isRequired}
                  />
                </div>
              </div>

              <div className="col-sm-12">
                <label>Description</label>
                <textarea
                  placeholder="Description"
                  className="form-control"
                  // name="description"
                  name={
                    location.pathname === "/admin/ito-management/create-new-ito"
                      ? "description"
                      : "descriptionn"
                  }
                  disabled={isSubscription}
                  value={
                    location.pathname === "/admin/ito-management/create-new-ito"
                      ? description
                      : draftUpdatedData.descriptionnn
                  }
                  // value={description}
                  onChange={(e) => onChange(e)}
                  ref={descriptionn}
                  required={isRequired}
                ></textarea>
              </div>
            </div>
            {/* <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}{" "}
              CREATE NEW SERIES
            </button> */}

            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewSeries;
