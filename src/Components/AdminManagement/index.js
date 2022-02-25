import React, { Fragment } from "react";

import UsersData from "./AllUsersData";
import { Link } from "react-router-dom";

import Route from "../../Constants/browserRoutes";

const AdminManagement = () => {
  return (
    <Fragment>
      <div className="col-12 col-md-10 offset-md-1">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-between">
            <div className="">
              {/* <div className="selct-drop d-block  "> */}
            </div>

            <div className="">
              <Link
                className="exp-mr-link text-dr-green"
                to={Route.ADD_NEW_SUB_ADMIN}
              >
                ADD NEW SUB ADMIN{" "}
                <i className="fa fa-plus-circle ml-1 font-24"></i>
              </Link>
            </div>
          </div>

          {/* </div> */}
          <div className="col-md-12">
            <UsersData />
          </div>
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </Fragment>
  );
};

export default AdminManagement;
