import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import browserRoute from "../../../Constants/browserRoutes";
import { subscriptionDrafts } from "../../../Services/subscription";
import TableWithDetailButton from "../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";

const SubscriptionDraft = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const Drafts = useSelector(
    (state) => state?.subscription.subscriptionDrafts.data
  );

  useEffect(() => {
    dispatch(subscriptionDrafts());
  }, []);

  const viewDetails = (id) => {
    history.push(browserRoute.UPDATE_SUBSCRIPTION_DRAFT.replace(":id", id));
  };

  return (
    <>
      <div className="card mb-2">
        <div className="card-body p-0">
          <div className="table-responsive">
            <TableWithDetailButton
              data={Drafts}
              columns={columns(viewDetails)}
              title={" DRAFT SUBSCRIPTIONS"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionDraft;
