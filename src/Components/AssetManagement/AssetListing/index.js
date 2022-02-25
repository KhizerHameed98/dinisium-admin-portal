import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../../Constants/config";
// import { data } from "./dummyData";
import AssetDetailItem from "./AssetDetailItem";
import { getAllAssets } from "../../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";
import browserRoute from "../../../Constants/browserRoutes";

const AssetDetail = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.assetManagement?.assetsList);
  // data?.sort((a, b) =>
  //   new Date(a.created_at) > new Date(b.created_at) ? -1 : 1
  // );
  // console.log("data==============>", data);

  // data?.sort((a, b) => {
  //   return a?.price - b?.price;
  // });

  // data?.sort((a, b) => {
  //   return a?.type - b?.type;
  // });

  // data?.sort((a, b) => {
  //   return a?.total_supply - b?.total_supply;
  // });

  // data?.sort((a, b) => {
  //   return a?.remaining_supply - b?.remaining_supply;
  // });

  // data?.sort((a, b) => {
  //   return a?.created_at - b?.created_at;
  // });
  // data?.sort((a, b) => {
  //   return a?.unit - b?.unit;
  // });
  console.log("data", data);

  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = data && data.length;

  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData]);

  useEffect(() => {
    dispatch(getAllAssets());
  }, []);

  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              columns={columns}
              title={"ASSETS"}
              data={data}
              options={{
                sorting: true,
              }}
              isViewDetailBtn={true}
              RouteBtn={browserRoute.ASSET_MANAGEMENT_DETAILS_BTN}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetDetail;
