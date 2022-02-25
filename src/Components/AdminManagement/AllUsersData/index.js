import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import config from "./../../../Constants/config";
import { columns } from "./ColumnData";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import UserItem from "./userItem";
import { connect, useSelector } from "react-redux";
import {
  getSubAdminsByItoId,
  getAvailableITO,
} from "../../../Redux/actions/actions";
import ColumnData from "./ColumnData";
import browserRoute from "../../../Constants/browserRoutes";
import { deleteAdmin } from "../../../Redux/actions/actions";

const UsersData = ({
  getSubAdminsByItoId,
  getAvailableITO,
  data,
  deleteAdmin,
}) => {
  const { subAdminList } = data;
  const itoId = useSelector((state) => state.auth.userDetails.ito_id);
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = subAdminList && subAdminList.length;

  //noOfScreens
  useEffect(() => {
    if (countData % config.userPerScreen === 0) {
      setCount(Math.floor(countData / config.userPerScreen));
    } else {
      setCount(Math.floor(countData / config.userPerScreen) + 1);
    }
  }, [countData, config.userPerScreen]);

  const handleDelete = (id) => {
    deleteAdmin(id);
  };

  useEffect(() => {
    getSubAdminsByItoId(itoId || 0);
    // getAvailableITO();
  }, []);
  console.log(subAdminList);
  return (
    <div className="card mb-2">
      <div className="card-body p-0">
        <div className="table-responsive">
          <TableWithDetailButton
            data={subAdminList}
            columns={columns(handleDelete)}
            title={"LIST OF ALL SUB ADMINS"}
            isViewDetailBtn={true}
            RouteBtn={browserRoute.ADMIN_DETAILS_BTN}
          />
        </div>
      </div>
    </div>
  );
};

const mpaStateToProps = (state) => {
  return {
    data: state.admin,
  };
};

export default connect(mpaStateToProps, {
  getSubAdminsByItoId,
  getAvailableITO,
})(UsersData);
