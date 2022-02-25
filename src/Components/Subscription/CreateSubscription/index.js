import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAdminToAssignItos,
  createSubscription,
} from "../../../Redux/actions/actions";
import Multiselect from "multiselect-react-dropdown";
import { useHistory } from "react-router";
import { DropzoneArea } from "material-ui-dropzone";
import {
  getSubscriptionDetaill,
  saveAsDraft,
} from "../../../Services/subscription";
import { useLocation } from "react-router-dom";

const CreateSubscription = () => {
  const dispatch = useDispatch();
  const allAdmins = useSelector((state) => state.ito?.allAdmins || []);
  const history = useHistory();

  const [isRequiredd, setIsRequired] = useState(false);

  const [formData, setFormData] = useState({
    itoName: "",
    itoSeries: "",
    tokenName: "",
    description: "",
    threshold: "",
    startDate: "",
    endDate: "",
    term_sheets: [],
    threshold_type: "limited",
    alloted_admins: [],
  });

  const [loading, setLoading] = useState(false);

  const {
    itoName,
    itoSeries,
    tokenName,
    description,
    threshold,
    startDate,
    endDate,
    term_sheets,
    threshold_type,
    alloted_admins,
  } = formData;

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
  const handleDeleteFile = (deletedFile) => {
    const termSheets = term_sheets.filter(
      (term_sheet) => term_sheet.name !== deletedFile.name
    );

    setFormData({
      ...formData,
      term_sheets: termSheets,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setIsRequired(true);
    const data = new FormData();
    data.append("ito_name", itoName);
    data.append("ito_series", itoSeries);
    data.append("ito_token", tokenName);
    data.append("description", description);
    data.append("threshold", threshold);
    data.append("start_date", startDate);
    data.append("end_date", endDate);
    data.append("threshold_type", threshold_type);
    for (const key in term_sheets) {
      data.append("term_sheets", term_sheets[key]);
    }
    alloted_admins.forEach((allotedAdmin, index) => {
      data.append(`alloted_admins[${index}][id]`, allotedAdmin["id"]);
    });

    dispatch(createSubscription({ data, setFormData, setLoading, history }));
  };

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

  const handleSaveAsDraft = (e) => {
    e.preventDefault();
    setIsRequired(false);
    // const draft = new FormData();
    // draft.append("ito_name", itoName);
    // draft.append("ito_series", itoSeries);
    // draft.append("ito_token", tokenName);
    // draft.append("description", description);
    // draft.append("threshold", threshold);
    // draft.append("start_date", startDate);
    // draft.append("end_date", endDate);
    // draft.append("threshold_type", threshold_type);
    // dispatch(saveAsDraft({ draft }));
    const data = {
      ito_name: itoName || null,
      ito_series: itoSeries || null,
      ito_token: tokenName || null,
      description: description || null,
      threshold: threshold || null,
      start_date: startDate || null,
      end_date: endDate || null,
      threshold_type: threshold_type || null,
    };
    dispatch(saveAsDraft(data));
  };

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <h5>Add New Subscription</h5>

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
                        required={isRequiredd}
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
                        value={itoSeries || subsDetail?.[0]?.ito_series}
                        onChange={(e) => onChange(e)}
                        required={isRequiredd}
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
                      value={tokenName || subsDetail?.[0]?.ito_token}
                      onChange={(e) => onChange(e)}
                      required={isRequiredd}
                    />
                  </div>
                  <div className="col-sm-6">
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
                  </div>

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
                          value={threshold || subsDetail?.[0]?.threshold}
                          onChange={(e) => onThresholdChange(e)}
                          required={isRequiredd}
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
                        value={startDate || subsDetail?.[0]?.start_date}
                        onChange={(e) => onChange(e)}
                        required={isRequiredd}
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
                        value={endDate || subsDetail?.[0]?.end_date}
                        onChange={(e) => onChange(e)}
                        required={isRequiredd}
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
                      value={description || subsDetail?.[0]?.description}
                      onChange={(e) => onChange(e)}
                      required={isRequiredd}
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={loading}
                  onClick={handleSubmit}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}{" "}
                  CREATE SUBSCRIPTION
                </button>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg draft"
                  disabled={loading}
                  onClick={handleSaveAsDraft}
                >
                  SAVE AS DRAFT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default CreateSubscription;
