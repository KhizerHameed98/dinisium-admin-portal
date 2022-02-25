import React, { Fragment, useEffect, useState } from "react";
import Select from "react-select";
import { connect, useSelector } from "react-redux";
import {
  getSubAdminById,
  adminLinkITO,
  getAllPermissions,
  assignPermission,
} from "../../../Redux/actions/actions";
// import data from "./data";

const AdminDetails = ({
  adminDetails,
  getSubAdminById,
  adminLinkITO,
  getAllPermissions,
  assignPermission,
  ...otherProps
}) => {
  const subAdminDetail = useSelector((state) => state.admin.subAdminDetail);
  const permissionsData = useSelector((state) => state.admin.permissionsData);

  const [selectITO, setSeletITO] = useState();
  const [selectedData, setSelectedData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [selectedName, setSelectedName] = useState("");

  const handleSelectITO = (e) => {
    const { value } = e.target;

    setSeletITO(value);

    const index = otherProps.adminITO.findIndex(
      (item) => item.id === parseInt(value)
    );

    setSelectedName(otherProps.adminITO[index].name);
  };

  const handleUpdateITO = () => {
    let obj = {
      ito_id: selectITO,
    };

    adminLinkITO({ id, obj, setSuccess });
  };

  const onChangeSelect = (e) => {
    setSelectedData(e);
  };

  const assignPermissionBtn = (e) => {
    e.preventDefault();
    assignPermission({ selectedData, subAdminId: subAdminDetail.id });
  };

  useEffect(() => {
    let id = otherProps.match.params.id;
    getSubAdminById(id);
    getAllPermissions();
  }, []);

  const {
    fname,
    lname,
    email,
    contact_no,
    role,
    id,
    country,
    ito_id,
    ito_name,
    permissions,
  } = subAdminDetail;

  let subAdminPermissions =
    (permissions &&
      permissions.length > 0 &&
      permissions.map((permission) => permission.name).join(",")) ||
    "";

  return (
    <Fragment>
      <div className="col-12 col-md-8 offset-md-2">
        {/* <!-- inner row --> */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card pu-rel text-dark p-5 mb-3">
              <h2 className="page-title-heading mb-4 font-30 text-center">
                Details
              </h2>

              <div className="row">
                <div className="col-12 col-md-12">
                  <ul className="row profile-detail">
                    <li className="col-12 col-md-6">
                      <span>Name:</span>
                      <span>{`${fname || ""} ${lname || ""}`}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Email:</span>
                      <span>{email || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Contact No:</span>
                      <span>{contact_no || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Role:</span>
                      <span>{role || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Country:</span>
                      <span>{country || ""}</span>
                    </li>
                    <li className="col-12 col-md-6">
                      <span>Linked to:</span>
                      <span>
                        {(permissions && permissions.length > 0
                          ? subAdminPermissions
                            ? subAdminPermissions
                            : ""
                          : "No Permission") || ""}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {ito_id && (
            <div className="col-sm-12 my-4">
              <div className="row">
                <div className="col-sm-6">
                  <label className="mr-3 font-weight-bold text-dark font-16">
                    Assign Permissions
                  </label>
                  {/* <select
                  className="custom-select w-50"
                  onChange={handleSelectITO}
                >
                  <option defaultChecked>Section Name</option>
                  {otherProps.adminITO.map((ito, index) => (
                    <option value={ito.id} key={index}>
                      {ito.name}
                    </option>
                  ))}
                </select> */}
                  <Select
                    defaultValue={[]}
                    isMulti
                    name="colors"
                    options={
                      permissionsData && permissionsData.length > 0
                        ? permissionsData
                        : []
                    }
                    classNamePrefix="select"
                    onChange={onChangeSelect}
                  />
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCentered"
                    className="btn btn-dark mt-2 btn-lg"
                    onClick={assignPermissionBtn}
                  >
                    Assign
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* <!-- Modal --> */}
          {/* Add Confirmation Modal */}
          {/* <!--end Modal --> */}
        </div>
        {/* <!-- end inner row --> */}
      </div>
    </Fragment>
  );
};

const mpaStateToProps = (state) => ({
  adminDetails: state.admin.adminDetails,
  adminITO: state.admin.adminITOList,
});

export default connect(mpaStateToProps, {
  getSubAdminById,
  adminLinkITO,
  getAllPermissions,
  assignPermission,
})(AdminDetails);
