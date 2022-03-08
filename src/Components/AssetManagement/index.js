import { Link } from "react-router-dom";
import Route from "../../Constants/browserRoutes";
import AddNewAsset from "./AddNewAsset";
import AssetDetail from "./AssetListing";
import AssetDrafts from "./Components/AssetDrafts";
import Pending from "./Components/Pending";
import Rejected from "./Components/Rejected";
import Verified from "./Components/Verified";

const AssetManagement = () => {
  return (
    <div className="col-12 col-md-10 offset-md-1">
      <div className="row">
        <div className="col-md-12 mb-2">
          <Link className="exp-mr-link text-dr-green" to={Route.ADD_NEW_ASSET}>
            ADD NEW ASSET <i className="fa fa-plus-circle ml-1 font-24"></i>
          </Link>
        </div>

        <div className="col-md-12">
          <AssetDrafts />
        </div>

        <div className="col-md-12">
          <AssetDetail />
        </div>

        <div className="col-md-12">
          <Pending />
        </div>

        <div className="col-md-12">
          <Verified />
        </div>

        <div className="col-md-12">
          <Rejected />
        </div>
      </div>
    </div>
  );
};

export default AssetManagement;
