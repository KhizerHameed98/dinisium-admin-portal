import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSeriesDraft } from "../../../Services/itoServices";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "../SeriesDraft/ColumnData";
import browserRoute from "../../../Constants/browserRoutes";

const SeriesDraft = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const seriesDraftss = useSelector((state) => state?.ito?.seriesDraftss);
  console.log("seriesdraftsq", seriesDraftss);
  useEffect(() => {
    dispatch(getSeriesDraft());
  }, []);

  const viewDetails = (id) => {
    console.log("id series", id);
    history.push(`${browserRoute.UPDATE_SERIES_DRAFT.replace(":id", id)}`);
  };

  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              title={"SERIES DRAFT"}
              columns={columns(viewDetails)}
              data={seriesDraftss}
              // RouteBtn={browserRoute.UPDATE_DRAFT } //view Detail button route
              //   isViewDetailBtn={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SeriesDraft;
