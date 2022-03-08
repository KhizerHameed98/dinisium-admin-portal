import { DropzoneArea } from "material-ui-dropzone";
import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllAdminToAssignItos } from "../../../Services/itoServices";
import {
  createSubscription,
  getSubscriptionDetaill,
  updateSubscriptionDraftsById,
  updateSubscriptionsDraft,
} from "../../../Services/subscription";
import moment from "moment";

const UpdateSubscription = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  const allAdmins = useSelector((state) => state.ito?.allAdmins || []);

  const { id } = useParams();

  const Details = useSelector(
    (state) => state?.subscription?.subscriptionDraftsId?.data?.details[0]
  );

  useEffect(() => {
    setFormData({
      itoName: Details?.ito_name,
      itoSeries: Details?.ito_series,
      tokenName: Details?.ito_token,
      description: Details?.description,
      threshold: Details?.threshold,
      startDate: Details?.start_date,
      endDate: Details?.end_date,
      term_sheets: [],
      threshold_Type: Details?.threshold_type,
      alloted_admins: [],
    });
  }, [Details]);

  console.log("formData", formData);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onThresholdChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleChangeFile = (files) => {
    // // check if term_sheets already contain file with same name
    // const fileExists = term_sheets.some(
    //   (sheet) =>
    //     sheet.name === files.find((file) => file.name === sheet.name)?.name
    // );

    setFormData({
      ...formData,
      term_sheets: files,
    });
  };

  //   const handleDeleteFile = (deletedFile) => {
  //     const termSheets = term_sheets.filter(
  //       (term_sheet) => term_sheet.name !== deletedFile.name
  //     );

  //     setFormData({
  //       ...formData,
  //       term_sheets: termSheets,
  //     });
  //   };

  const subsDetail = useSelector((state) => {
    return state?.subscription?.subscriptionData?.data;
  });

  useEffect(() => {
    // same for subscription and ito
    dispatch(getAllAdminToAssignItos());
  }, []);

  useEffect(() => {
    dispatch(getSubscriptionDetaill());
  }, []);

  useEffect(() => {
    dispatch(updateSubscriptionDraftsById(id));
  }, []);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     // setIsRequired(true);
  //     const data = new FormData();
  //     data.append("ito_name", formData.itoName);
  //     data.append("ito_series", formData.itoSeries);
  //     data.append("ito_token", formData.tokenName);
  //     data.append("description", formData.description);
  //     data.append("threshold", formData.threshold);
  //     data.append("start_date", formData.startDate);
  //     data.append("end_date", formData.endDate);
  //     data.append("threshold_type", formData.threshold_type);
  //     // for (const key in term_sheets) {
  //     //   data.append("term_sheets", term_sheets[key]);
  //     // }
  //     // alloted_admins.forEach((allotedAdmin, index) => {
  //     //   data.append(`alloted_admins[${index}][id]`, allotedAdmin["id"]);
  //     // });

  //     dispatch(createSubscription({ data, setFormData, setLoading, history }));
  //   };

  const handleDeleteFile = (deletedFile) => {
    const termSheets = formData.term_sheets.filter(
      (term_sheet) => term_sheet.name !== deletedFile.name
    );
    setFormData({
      ...formData,
      term_sheets: termSheets,
    });
  };

  const updateSubscriptionDrafts = (id) => {
    console.log("sasa", formData);

    const data = {
      ito_name: formData.itoName,
      ito_series: formData.itoSeries,
      ito_token: formData.tokenName,
      description: formData.description,
      threshold: formData.threshold,
      start_date: formData.startDate,
      end_date: formData.endDate,
      threshold_type: formData.threshold_Type,
    };

    dispatch(updateSubscriptionsDraft(id, data));
  };

  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-md-12">
            <h5> Update Subscription </h5>
            <div className="card mb-4">
              <div className="card-body p-5">
                <form className="form">
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Enter ITO Name</label>
                        <input
                          type="text"
                          placeholder="ITO Name"
                          className="form-control"
                          name="itoName"
                          value={formData.itoName}
                          onChange={(e) => onChange(e)}
                          // required={isRequiredd}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Enter ITO Series Name</label>
                        <input
                          type="text"
                          placeholder="ITO Series Name"
                          className="form-control"
                          name="itoSeries"
                          value={
                            formData.itoSeries || subsDetail?.[0]?.ito_series
                          }
                          onChange={(e) => onChange(e)}
                          // required={isRequiredd}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label>Enter Token Name</label>
                      <input
                        type="text"
                        placeholder="Token Name"
                        className="form-control"
                        name="tokenName"
                        value={formData.tokenName || subsDetail?.[0]?.ito_token}
                        onChange={(e) => onChange(e)}
                        //   required={isRequiredd}
                      />
                    </div>
                    {/* <div className="col-sm-6">
                      <div className="form-group">
                        <label>Admins</label>
                        <Multiselect
                          displayValue="label"
                          onRemove={function noRefCheck(selectedAdmins) {
                            setFormData({
                              ...formData,
                              alloted_admins: [...selectedAdmins],
                            });
                          }}
                          onSearch={function noRefCheck() {}}
                          onSelect={function noRefCheck(selectedValues) {
                            setFormData({
                              ...formData,
                              alloted_admins: [...selectedValues],
                            });
                          }}
                          options={[...allAdmins]}
                        />
                      </div>
                    </div> */}

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Enter Threshold in Dollars</label>
                        <div className="input-icon">
                          <i>$</i>
                          <input
                            type="text"
                            placeholder="Enter Threshold in Dollars"
                            className="form-control"
                            name="threshold"
                            value={
                              formData.threshold || subsDetail?.[0]?.threshold
                            }
                            onChange={(e) => onThresholdChange(e)}
                            //   required={isRequiredd}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Select Threshold Type</label>
                        <select
                          name="threshold_type"
                          className="form-control"
                          onChange={onChange}
                          value={subsDetail?.threshold_type}
                        >
                          <option value="limited">Limited</option>
                          <option value="unlimited">Unlimited</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Enter Start Date</label>
                        <input
                          type="date"
                          placeholder="Enter Start Date"
                          className="form-control"
                          name="startDate"
                          value={moment(
                            formData.startDate || subsDetail?.[0]?.start_date
                          ).format("YYYY-MM-DD")}
                          onChange={(e) => onChange(e)}
                          // required={isRequiredd}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Enter End Date</label>
                        <input
                          type="date"
                          placeholder="Enter End Date"
                          className="form-control"
                          name="endDate"
                          value={moment(
                            formData.endDate || subsDetail?.[0]?.end_date
                          ).format("YYYY-MM-DD")}
                          onChange={(e) => onChange(e)}
                          // required={isRequiredd}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label style={{ display: "block", paddingTop: "15px" }}>
                          Upload Term-Sheets
                        </label>
                        <DropzoneArea
                          style={{ padding: "100px" }}
                          acceptedFiles={["application/pdf"]}
                          onChange={handleChangeFile}
                          showFileNames
                          dropzoneText="Click to Upload Files or Drag Here..."
                          showAlerts={true}
                          filesLimit={5}
                          maxFileSize={25000000}
                          onDelete={handleDeleteFile}
                        />
                      </div>
                    </div>

                    <div className="col-sm-12">
                      <label>Enter Description</label>
                      <textarea
                        placeholder="Enter Description"
                        className="form-control"
                        name="description"
                        value={
                          formData.description || subsDetail?.[0]?.description
                        }
                        onChange={(e) => onChange(e)}
                        //   required={isRequiredd}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                    //   onClick={handleSubmit}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}{" "}
                    CREATE SUBSCRIPTION
                  </button>
                </form>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg draft"
                  disabled={loading}
                  onClick={() => updateSubscriptionDrafts(id)}
                >
                  UPDATE DRAFT
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </>
  );
};

export default UpdateSubscription;
