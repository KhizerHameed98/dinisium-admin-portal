import React, { useState, useEffect } from "react";
// import CreateSeriesModal from "./CreateSeriesModal";
import { Alert, Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  createItoSeries,
  getAssignedItos,
  loadUser,
  getItoSeriesById,
  getOngoingItoSeries,
} from "../../../Redux/actions/actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { saveAsDraftSeries } from "../../../Services/itoServices";

const CreateNewSeries = ({ createItoSeries, loadUser }) => {
  const dispatch = useDispatch();
  const assignedItosData = useSelector(
    (state) => state.ito?.assignedItosData?.data
  );
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [required, setRequired] = useState(false);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const onGoingITO = useSelector((state) => state?.ito?.ongoingData?.data);
  let startDate;
  let endDate;

  //alert tost

  const alertToast = (error, message) => {
    if (!error) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    start_date: "",
    end_date: "",
    description: "",
    supply: "",
    ito_id: "",
  });

  const { name, start_date, end_date, description, supply, ito_id } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSupplyChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      (cDate <= lDate && cDate >= fDate) ||
      (dDate <= lDate && dDate >= fDate)
    ) {
      toast.error(
        "ITO series in this date range already exists, please select another start and end date"
      );
    } else {
      setShow(true);
    }
  };
  onGoingITO?.map((ito) => {
    if (ito.ito_id == ito_id) {
      startDate = ito.start_date;
      endDate = ito.end_date;
    }
  });

  // const startCheck = moment(start_date).format('YYYY/MM/DD')
  // const endCheck = moment(end_date).format('YYYY/MM/DD')

  // console.log('START DATE IS =======>', startDate)
  // console.log('END DATE IS ====>', endDate)

  var fDate, lDate, cDate, dDate, today;
  fDate = Date.parse(startDate);
  lDate = Date.parse(endDate);
  cDate = Date.parse(start_date);
  dDate = Date.parse(end_date);

  const handleCreateItoSeries = () => {
    setLoading(true);
    createItoSeries({
      formData,
      setFormData,
      setLoading,
      history,
    });
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getAssignedItos());
    dispatch(getOngoingItoSeries());
  }, []);

  const handleSeriesDraft = (e) => {
    e.preventDefault();
    setRequired(false);
    const data = {
      series_name: formData.name || null,
      start_date: formData.start_date || null,
      end_date: formData.end_date || null,
      description: formData.description || null,
      supply: formData.supply || null,
      ito_id: formData.ito_id || null,
    };
    dispatch(saveAsDraftSeries(data));
  };

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Series Name</label>
                      <input
                        type="text"
                        placeholder="Series Name"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                        required={required}
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
                        value={supply}
                        onChange={(e) => onSupplyChange(e)}
                        required={required}
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
                      value={start_date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => onChange(e)}
                      required={required}
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
                        value={end_date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => onChange(e)}
                        required={required}
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <label>Description</label>
                    <textarea
                      placeholder="Description"
                      className="form-control"
                      name="description"
                      value={description}
                      onChange={(e) => onChange(e)}
                      required={required}
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}{" "}
                  CREATE NEW SERIES
                </button>
              </form>
              <button
                className="btn btn-primary btn-lg seriesdraft"
                onClick={handleSeriesDraft}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}{" "}
                SAVE AS DRAFT
              </button>
              {/* <!-- Modal --> */}
              {/* <CreateSeriesModal show={show} setShow={setShow} /> */}
              {/* <!--end Modal --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}

      {/* <!-- modal start --> */}
      {show && (
        <Modal
          size="md"
          show={show}
          onHide={handleClose}
          style={{ opacity: 1 }}
          centered
        >
          <div className="modal-header border-0">
            <button type="button" className="close" onClick={handleClose}>
              <span className="font-18">&times;</span>
            </button>
          </div>
          <Modal.Body className="text-center">
            <div>
              <p>
                Are you sure, you you want to create <strong>ITO series</strong>
                {/* create ITO series create<strong>successfully</strong> */}
              </p>
            </div>

            <ul className="row data-confirmation">
              <li className="col-12 col-md-6">
                <span>Asset Name : </span>
                <span style={{ paddingLeft: "4px" }}>{name}</span>
              </li>
              <li className="col-12 col-md-6">
                <span>Supply : </span>
                <span style={{ paddingLeft: "4px" }}>{supply}</span>
              </li>
              <li className="col-12 col-md-6">
                <span>Start Date : </span>
                <span style={{ paddingLeft: "4px" }}>{start_date} $</span>
              </li>
              <li className="col-12 col-md-6">
                <span>End Date : </span>
                <span style={{ paddingLeft: "4px" }}>{end_date}</span>
              </li>
              <li className="col-12 col-md-6">
                <span>Description : </span>
                <span style={{ paddingLeft: "4px" }}>{description}</span>
              </li>
            </ul>

            <button
              type="button"
              className="btn btn-primary w-25 btn-md"
              // onClick={handleClose}
              onClick={handleCreateItoSeries}
            >
              Ok
            </button>
          </Modal.Body>
          <Modal.Footer className="border-0"></Modal.Footer>
        </Modal>
      )}

      {/* <!-- modal end --> */}
    </div>
  );
};

export default connect(null, { createItoSeries, loadUser })(CreateNewSeries);
