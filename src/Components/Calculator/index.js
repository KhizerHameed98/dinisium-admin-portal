import React from "react";

const Calculator = () => {
  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="selct-drop d-block  ">
              <select className="custom-select font-weight-bold d-inline mb-3 w-50">
                <option defaultChecked>Select ITO</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-12">
                    <h4 className="tbl-small-heading font-18">
                      Convert your Token / Amount
                    </h4>
                  </div>

                  <div className="col-md-8">
                    <div className="text-secondary font-weight-bold mb-4">
                      <div className=" py-2 px-2">
                        <div className="d-inline-block">
                          <p className="mb-0">
                            Token Name:{" "}
                            <span className="text-primary">
                              Token Name(TCN)
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <h4 className="font-18">Calculator</h4>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Amount"
                        className="form-control font-14 text-dark"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body bg-lit-gr py-2 px-3">
                        <p className="font-14 mb-0 text-justify">
                          Token <span className="float-right">20</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body bg-lit-gr py-2 px-3">
                        <p className="font-14 mb-0 text-justify">Token Name</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Token"
                        className="form-control font-14 text-dark"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-3">
                    <div className="card">
                      <div className="card-body bg-lit-gr py-2 px-3">
                        <p className="font-14 mb-0 text-justify">
                          Token <span className="float-right">20</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mt-4">
                    <a
                      className="bg-semi-black text-white py-2 px-4 rounded"
                      href="#"
                    >
                      Convert
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </>
  );
};

export default Calculator;
