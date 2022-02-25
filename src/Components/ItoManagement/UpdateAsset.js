import React from 'react';

const UpdateAsset = () => {


  return <>
  
  <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">

        <form onSubmit={onSubmit}>
       
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
                  name="name"
                  value= {location.pathname==="/admin/ito-management/create-new-ito"? name :  updatedData?.ito_name }
                  // value={name}
                  disabled={isSubscription}
                //   onChange={(e) => onChange(e)}
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
                    // setFormData({
                    //   ...formData,
                    //   ito: { ...ito, alloted_admins: [...selectedAdmins] },
                    // });
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
                name="start_date"
                disabled={isSubscription}
                value= {location.pathname==="/admin/ito-management/create-new-ito"? start_date :  updatedData?.created_at }
                value={start_date}
                // onChange={(e) => onChange(e)}
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
                <DropzoneArea
                  style={{ padding: "100px" }}
                  acceptedFiles={["application/pdf"]}
                  // acceptedFiles={handleAccept}
                //   onChange={handleChangeFile}
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
        
        
        </form>
    
          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 mt-2"
            // disabled={loading}
            onClick={handleSaveasDraft}
          >
            {" "}
            UPDATE DRAFT
          </button>

      </div>
      
 
    </div>
  
  </>;
};

export default UpdateAsset;
