import React, { useState, useEffect } from "react";

const EditAbout = () => {
  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form" action="">
                <div className="form-group row">
                  <div className="col-sm-12 mb-3">
                    <label>Description</label>

                    <textarea
                      rows="6"
                      placeholder="Description"
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

export default EditAbout;
