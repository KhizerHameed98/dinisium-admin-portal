import React, { Fragment } from "react";
import NavContent from "./NavContent";
import navigation from "../../../../menu-items";
import { SubAdminMenuItems } from "../../../../menu-items";
import { useSelector } from "react-redux";

const Navigation = () => {
  const userDetails = useSelector((state) => state.auth.userDetails);

  return (
    <Fragment>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu pb-5">
            {/* {userDetails && userDetails.role === "admin" ? ( */}
            <NavContent navigation={navigation.items} />
            {/* ) : (
              <NavContent navigation={SubAdminMenuItems.items} />
            )} */}
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navigation;
