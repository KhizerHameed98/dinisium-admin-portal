import React from "react";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { AssetDraftColumns } from "./AssetDraftColumns";

const AssetDrafts = () => {
  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              columns={AssetDraftColumns}
              title={"ASSET DRAFTS"}
              //   data={approved}
              //   isViewDetailBtn={true}
              //   RouteBtn={browserRoute.ASSET_MANAGEMENT_DETAILS_BTN}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetDrafts;
