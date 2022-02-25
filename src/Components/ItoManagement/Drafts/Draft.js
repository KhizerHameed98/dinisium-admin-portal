import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDraftIto } from "../../../Services/itoServices";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";
import browserRoute from "../../../Constants/browserRoutes";
import { useHistory } from "react-router-dom";

const Draft = ({ draftItos }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDraftIto());
  // }, []);

  // const draftItos = useSelector((state) => {
  //   return  state?.ito?.draftItos;
  // });

  console.log("in the component", draftItos.id);
  const history = useHistory()

  const viewDetaill = (id) => {
    // alert(id)
    console.log("called" , id)
    history.push(browserRoute.UPDATE_DRAFT.replace(':id','') + id)
    // history.push(browserRoute.UPDATE_DRAFT ,id)
  }

  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              title={"Draft ITOs"}
              columns={columns(viewDetaill)}
              data={draftItos}
              // RouteBtn={browserRoute.UPDATE_DRAFT } //view Detail button route
              // isViewDetailBtn={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Draft;
