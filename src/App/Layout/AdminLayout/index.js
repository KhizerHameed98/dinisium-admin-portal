import React, { Suspense, useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import Navigation from "./Navigation";
import routes from "../../../Routes/pagesRoutes";
import { Redirect, Route, Switch } from "react-router-dom";
import browserRoutes from "../../../Constants/browserRoutes";
import PrivateRoute from "../../../hoc/privateRoute";
import Loader from "../Loader";
import Footer from "./Footer";
import BreadCrumb from "./BreadCrumb";
import PageTitle from "./PageTitle";
import { SideNavToggleContext } from "../../index";
import { connect, useSelector } from "react-redux";

const AdminLayout = () => {
  const [sideNavToggleValue, setSideNavToggleValue] = useState("");

  const sideNavToggleContext = useContext(SideNavToggleContext);
  const { sideNavToggle } = sideNavToggleContext;

  const userDetails = useSelector((state) => state.auth.userDetails);

  useEffect(() => {
    if (sideNavToggle) setSideNavToggleValue("sb-sidenav-toggled");
    else setSideNavToggleValue("");
  }, [sideNavToggle]);

  const menu = routes.map((route, index) => {
    return route.component && userDetails && userDetails.role === "admin" ? (
      <PrivateRoute
        key={index}
        exact={route.exact}
        path={route.path}
        name={route.name}
        component={route.component}
      />
    ) : null;
  });

  // Find Sub Admin Routes according to their permissions
  let subAdminRoutes = [];
  userDetails &&
    userDetails.permissions &&
    userDetails.permissions.length > 0 &&
    userDetails.permissions.forEach((permission) => {
      let filterRoutes =
        routes &&
        routes.length > 0 &&
        routes.filter((route) => route.permissionName === permission);
      subAdminRoutes = [...subAdminRoutes, ...filterRoutes];
    });

  const subAdminMenu =
    subAdminRoutes &&
    subAdminRoutes.length > 0 &&
    subAdminRoutes.map((route, index) => {
      return route.component &&
        userDetails &&
        userDetails.role === "sub-admin" ? (
        <PrivateRoute
          key={index}
          exact={route.exact}
          path={route.path}
          name={route.name}
          component={route.component}
        />
      ) : null;
    });

  return (
    <div className={`sb-nav-fixed ${sideNavToggleValue}`}>
      <NavBar />
      <div id="layoutSidenav">
        <Navigation />
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid">
              <BreadCrumb />
              <div className="row">
                <PageTitle />
                <Suspense fallback={<Loader />}>
                  <Switch>
                    {/* {userDetails && userDetails.role === "admin"
                      ? { menu }
                      : { subAdminMenu }} */}
                    {menu}
                    {subAdminMenu}
                  </Switch>
                </Suspense>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
