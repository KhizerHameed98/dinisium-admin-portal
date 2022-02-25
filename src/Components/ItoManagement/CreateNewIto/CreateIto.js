import React, { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import "react-quill/dist/quill.snow.css";
import { DropzoneArea } from "material-ui-dropzone";
import ReactQuill from "react-quill";
import { modules, formats } from "./ItoEditorProps";

import { connect, useDispatch, useSelector } from "react-redux";
import {
  getAllAdminToAssignItos,
  getSubscriptionById,
} from "../../../Redux/actions/actions";
import { toast } from "react-toastify";
import browserRoute from "../../../Constants/browserRoutes";
import { useLocation } from "react-router-dom";
// import { ito } from "../../../Routes/serverRoutes";

const CreateIto = ({
  rest: { match },
  formData,
  setFormData,
  loading,
  onSubmit,
  isSubscription,
  updatedrafts,
  location,
  updatedData,
  handleUpdateDraft,
  refName,
  refStartDate,
  // draftUpdatedData,
  // setDraftUpdatedData,
}) => {
  const {
    ito,
    ito: { term_sheets, name, alloted_admins, start_date, description },
  } = formData;

  const defaultValues = {};
  console.log("ito name", defaultValues);
  const [draftUpdatedData, setDraftUpdatedData] = useState({
    namee: updatedData?.ito_name,
    start_datee: updatedData?.start_date,
  });
  console.log("ito nowww", draftUpdatedData);
  const { namee, start_datee } = draftUpdatedData;

  console.log("drafts", updatedrafts);
  console.log("itoname", namee);

  const allAdmins = useSelector((state) => state.ito?.allAdmins || []);
  const subscriptionDetail = useSelector(
    (state) => state.subscription?.subscriptionDetail || {}
  );
  const subscriptionAdmins = useSelector(
    (state) => state.subscription?.admins || []
  );

  const termSheet = useSelector((state) => {
    return (
      state?.subscription?.subscriptionDetail?.term_sheets &&
      state?.subscription?.subscriptionDetail?.term_sheets[0]
    );
  });

  console.log("TERMSHEETS", termSheet);
  const dispatch = useDispatch();
  const newFile = new File([`abc`], `${termSheet}`, {
    type: "plain/text",
  });

  const [fileExist, setFileExist] = useState(null);

  const handleDeleteFile = (deletedFile) => {
    const termSheets = term_sheets.filter(
      (term_sheet) => term_sheet.name !== deletedFile.name
    );

    setFormData({
      ...formData,
      ito: { ...ito, term_sheets: termSheets },
    });
  };

  const onChange = (e) => {
    setFormData({
      ...formData,
      ito: { ...ito, [e.target.name]: e.target.value },
    });
    setDraftUpdatedData({
      ...draftUpdatedData,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeDescription = (e) => {
    setFormData({
      ...formData,
      ito: { ...ito, description: e },
    });
  };

  const handleChangeFile = (files, showAlerts) => {
    // // check if term_sheets already contain file with same name
    // const fileExists = term_sheets.some(
    //   (sheet) =>
    //     sheet.name === files.find((file) => file.name === sheet.name)?.name
    // );

    console.log("file====>", files);
    const fileExist = term_sheets.some(
      (sheet) =>
        sheet.name === files.find((file) => file.name === sheet.name)?.name
    );

    console.log("aa", fileExist);
    setFileExist(fileExist);

    setFormData({
      ...formData,
      ito: { ...ito, term_sheets: files },
    });
  };

  useEffect(() => {
    if (window.location.pathname === browserRoute.CREATE_NEW_ITO) {
      dispatch(getAllAdminToAssignItos());
    }
  }, []);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };

  const all = Object.assign({}, ...updatedrafts);

  console.log(newFile);
  return (
    <div className="col-md-12">
      <div className="card mb-4">
        <div className="card-header ito-card-header">ITO</div>
        <div className="card-body p-5">
          {/* <form className="form" onSubmit={onSubmit}> */}
          <div className="form-group row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  // name="name || namee "
                  name={
                    location.pathname === "/admin/ito-management/create-new-ito"
                      ? "name"
                      : "namee"
                  }
                  value={
                    location.pathname == "/admin/ito-management/create-new-ito"
                      ? name
                      : draftUpdatedData.namee
                  }
                  // value={name}
                  ref={refName}
                  disabled={isSubscription}
                  onChange={(e) => onChange(e)}
                  required
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Admins</label>
                <Multiselect
                  displayValue="label"
                  disable={isSubscription}
                  selectedValues={isSubscription && [...subscriptionAdmins]}
                  onRemove={function noRefCheck(selectedAdmins) {
                    setFormData({
                      ...formData,
                      ito: { ...ito, alloted_admins: [...selectedAdmins] },
                    });
                  }}
                  onSearch={function noRefCheck() {}}
                  onSelect={function noRefCheck(selectedValues) {
                    setFormData({
                      ...formData,
                      ito: { ...ito, alloted_admins: [...selectedValues] },
                    });
                  }}
                  options={[...allAdmins]}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <label>Start Date</label>
              <input
                type="date"
                placeholder="Start Date"
                className="form-control"
                // name="start_date || start_datee"
                name={
                  location.pathname === "/admin/ito-management/create-new-ito"
                    ? "start_date"
                    : "start_datee"
                }
                disabled={isSubscription}
                value={
                  location.pathname === "/admin/ito-management/create-new-ito"
                    ? start_date
                    : defaultValues.start_datee
                }
                // value={start_date}
                ref={refStartDate}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="col-sm-6"></div>
            <div className="col-sm-12">
              <div className="form-group">
                <label style={{ display: "block", paddingTop: "15px" }}>
                  Upload Term-Sheets
                </label>
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleOpenFileUpload}
                >
                  Add Term Sheet
                </button> */}
                {/* <DropzoneDialog
                  open={open}
                  onSave={handleSaveFile}
                  acceptedFiles={["application/pdf"]}
                  showPreviews={true}
                  maxFileSize={5000000}
                  onClose={handleCloseFileUpload}
                /> */}
                {!isSubscription && (
                  <DropzoneArea
                    style={{ padding: "100px" }}
                    acceptedFiles={["application/pdf"]}
                    // acceptedFiles={handleAccept}
                    onChange={handleChangeFile}
                    // onClick = {alert(termSheet)}
                    showFileNames
                    dropzoneText="Click to Upload Files or Drag Here.."
                    showPreviewsInDropzone={termSheet}
                    // showAlerts={true}
                    // showAlerts={["error"]}
                    // value={termSheet}
                    filesLimit={1}
                    onDelete={handleDeleteFile}
                    maxFileSize={250000000000000}
                  />
                )}
                {isSubscription && (
                  <DropzoneArea
                    open={false}
                    style={{ padding: "100px" }}
                    acceptedFiles={["application/pdf"]}
                    // acceptedFiles={handleAccept}
                    initialFiles={[newFile]}
                    // onClick = {alert(termSheet)}
                    showFileNames
                    dropzoneText="Uploaded file.."
                    // showAlerts={true}
                    // showAlerts={["error"]}
                    // value={termSheet}
                  />
                )}
              </div>
            </div>
            <div className="col-sm-12">
              <label>Description</label>
              <ReactQuill
                value={description}
                onChange={(e) => onChangeDescription(e)}
                placeholder="Type somthing here..."
                modules={modules}
                formats={formats}
                theme="snow"
              />
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
            CREATE NEW ITO
          </button> */}
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ito: state.ito,
});

export default connect(mapStateToProps)(CreateIto);
