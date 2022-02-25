import React, { useState, useEffect } from "react";

const EditHome = () => {
  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form" action="">
                <div className="form-group row">
                  <div className="col-sm-4">
                    <div className="form-group upload-input-sty">
                      <p className="upload-icon">
                        <i className="far fa-image"></i>
                      </p>
                      <label for="exampleFormControlFile1">
                        Upload_Logo <i className="fas fa-plus-circle"></i>
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                  </div>

                  <div className="col-sm-12 mb-3">
                    <label>Banner</label>

                    <textarea
                      placeholder="Banner"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                  <div className="col-sm-12">
                    <label>Tagline</label>

                    <textarea
                      placeholder="Tagline"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                </div>
                <button type="button" className="btn btn-dark btn-lg">
                  Update
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

export default EditHome;
