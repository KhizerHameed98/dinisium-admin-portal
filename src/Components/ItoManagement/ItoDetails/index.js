import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getAssignedItoById } from "../../../Redux/actions/actions";
import SeriesDetail from "./SeriesDetail";
import ItoDetail from "./ItoDetail/ItoDetail";
import TokenDetail from "./TokenDetail/TokenDetail";
import VerifyItoCreationModal from "./VerifyItoCreationModal";
import SubscriptionDetail from "./SubscriptionDetail";
// import { verifyItoCreation } from "../../../Redux/actions/actions";

const ItoDetails = ({ match, location }) => {
  const dispatch = useDispatch();
  const ito = useSelector((state) => state.ito?.ito);
  const subscription = useSelector((state) => state.ito?.subscription);
  const user = JSON.parse(localStorage.getItem("user"));

  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getAssignedItoById({ itoId: match.params.id }));
  }, []);

  const showVerifyItoModal = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <>
      <div className="col-12 col-md-8 offset-md-2">
        {/* <!-- inner row --> */}
        <ItoDetail />
        <TokenDetail />
        <SeriesDetail />
        {subscription && <SubscriptionDetail />}

        {ito.user_id !== user.id && (
          <button
            className={`btn btn-primary w-100 btn-lg mt-3`}
            onClick={showVerifyItoModal}
            disabled={ito?.status !== "pending" ? true : false}
          >
            {ito?.status === "pending"
              ? "Verify ITO"
              : ito?.status?.replace(
                  ito?.status?.charAt(0),
                  ito?.status?.charAt(0)?.toUpperCase()
                )}
          </button>
        )}

        {/* <!-- end inner row --> */}

        {show && <VerifyItoCreationModal show={show} setShow={setShow} />}
      </div>
    </>
  );
};

export default ItoDetails;
