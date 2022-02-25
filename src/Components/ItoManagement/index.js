import React, { useEffect } from "react";
import Ongoing from "./Ongoing";
import Upcoming from "./Upcoming/index";
import Past from "./Past/index";
import { Link, useHistory } from "react-router-dom";
import Route from "../../Constants/browserRoutes";
import Authorized from "./Authorized";
import browserRoute from "../../Constants/browserRoutes";
import Draft from "./Drafts/Draft";
import { getDraftIto } from "../../Services/itoServices";
import { useDispatch, useSelector } from "react-redux";
import SeriesDraft from "./SeriesDraft/SeriesDraft";

const ITOManagement = () => {
  const history = useHistory();

  const approvedRequest = () => {
    // console.log('hello');
    history.push(browserRoute.APPROVED_REQUEST);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDraftIto());
  }, []);
  const draftItos = useSelector((state) => {
    return state?.ito?.draftItos;
  });

  console.log("drafts", draftItos);
  return (
    <div className="col-12 col-md-10 offset-md-1">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12 mb-2">
          {/* <h2 className="tbl-small-heading d-inline font-24">Authorized ITO</h2> */}
          <div className="col-lg-4">
            {/*          
            <button
              type="button"
              className="btn btn-primary btn-lg req-button"
              onClick={approvedRequest}
            >
              Approved Request{" "}
            </button> */}
          </div>
          <Link className="exp-mr-link text-dr-green" to={Route.CREATE_NEW_ITO}>
            ADD NEW ITO <i className="fa fa-plus-circle ml-1 font-24"></i>
          </Link>
        </div>

        <div className="col-md-12 ">
          <Draft draftItos={draftItos} />
        </div>

        <div className="col-md-12">
          <Authorized />
        </div>

        <div className="col-md-12 my-2">
          <Link
            className="exp-mr-link text-dr-green"
            to={Route.CREATE_NEW_SERIES}
          >
            ADD NEW SERIES <i className="fa fa-plus-circle ml-1 font-24"></i>
          </Link>
        </div>
        <div className="col-md-12 ">
          <SeriesDraft />
        </div>
        <div className="col-md-12 ">
          <Ongoing />
        </div>

        <div className="col-md-12 "></div>
        <div className="col-md-12">
          <Upcoming />
        </div>

        {/* <div className="col-md-12 my-2"></div> */}

        <div className="col-md-12">
          <Past />
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default ITOManagement;
