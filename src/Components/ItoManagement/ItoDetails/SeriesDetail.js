import React from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";

const SeriesDetail = () => {
  const series = useSelector((state) => state.ito?.series);

  return (
    <div className="row">
      <div className="col-sm-12">
        <h3>Series</h3>
        <div className="card p-5">
          <p>
            {/* <span className="pro-heading-b mb-2 mr-3">
                ITO Seriess Namef
              </span>{" "} */}  
              <div className="d-flex">
              <span className="" style={{fontWeight:'bold' , marginRight:'10px'}}>Series Name: </span> <p style={{fontSize:"12px"}}> {series && series.name} </p>
              </div>
            {/* <span className="pro-heading-b" style={{marginRight:'25px'}}> Series Name{series && series.name}</span> */}
          </p>
          <p>
            <span className="pro-date mb-0">
              <i className="far fa-calendar"></i>
              <Moment style={{marginLeft:'7px'}} format="D MMM YYYY" withTitle>
                {series && series.start_date}
              </Moment>
              -{" "}
              <Moment style={{marginLeft:'5px'}} format="D MMM YYYY" withTitle>
                {series && series.end_date}
              </Moment>
            </span>
          </p>
          <div className="card mb-4">
            <div className="card-body bg-lit-gr">
              <h4 className="font-18">Description</h4>
              <p className="font-14 text-justify">
                {series && series.description}
              </p>
            </div>
          </div>
          <ul className="row profile-detail">
            <li className="col-12 col-md-6" style={{ border: "0px" }}>
              <span>Supply</span>
              <span>{series?.supply}</span>
            </li>
            <li className="col-12 col-md-6" style={{ border: "0px" }}>
              <span>Remaining Supply</span>
              <span>{series?.remaining_supply}</span>
            </li>
          </ul>
          {/* {showBtn && (
              <div className="mt-4">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCentered"
                  className="btn btn-primary w-25 btn-lg mr-3"
                >
                  On Hold 
                </button>
              </div>
            )} */}
        </div>
      </div>
    </div>
  );
};

export default SeriesDetail;
