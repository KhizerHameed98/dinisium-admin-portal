import React, { useEffect, useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import config from "../../../Constants/config";
// import { data } from "../dummyData";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
// import AuthorizedItem from "./AuthorizedItem";
import { getSubscriptions } from "../../../Redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SubscriptionListItem from "./SubscriptionListItem";
import { columns } from "./ColumnData";
import browserRoute from "../../../Constants/browserRoutes";

const SubscriptionList = ({}) => {
  const subscriptions = useSelector(
    (state) => state.subscription?.subscriptions
  );
  const dispatch = useDispatch();
  //screen No. e.g; 1 or 2 or 3 etc
  const [screen, setScreen] = useState(1);
  //Total No Of Screens
  const [count, setCount] = useState(0);
  //No. of Items Per Screen

  const handleChange = (event, value) => {
    setScreen(value);
  };
  const countData = subscriptions && subscriptions.length;

  //noOfScreens
  useEffect(() => {
    if (countData % config.itemsPerScreen === 0) {
      setCount(Math.floor(countData / config.itemsPerScreen));
    } else {
      setCount(Math.floor(countData / config.itemsPerScreen) + 1);
    }
  }, [countData]);

  useEffect(() => {
    dispatch(getSubscriptions());
  }, []);
  console.log(subscriptions);
  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              data={subscriptions}
              columns={columns}
              title={"SUBSCRIPTIONS"}
              isViewDetailBtn={true}
              RouteBtn={browserRoute.SUBSCRIPTION_DETAIL_BTN}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionList;
