import React from "react";
import { useSelector } from "react-redux";
import NavItem from "../NavItem";

const NavGroup = ({ group }) => {
  const userDetails = useSelector((state) => state.auth.userDetails);

  // Find Sub Admin MenuItems Childrens according to their permissions
  let subAdminMenus = [];
  userDetails &&
    userDetails.permissions &&
    userDetails.permissions.length > 0 &&
    userDetails.permissions.forEach((permission) => {
      let filterMenus =
        group &&
        group.children &&
        group.children.length > 0 &&
        group.children.filter(
          (navItem) => navItem.permissionName === permission
        );
      subAdminMenus = [...subAdminMenus, ...filterMenus];
    });

  let navItems = "";

  if (
    subAdminMenus &&
    subAdminMenus.length > 0 &&
    userDetails.role === "sub-admin"
  ) {
    navItems = Object.keys(subAdminMenus).map((item) => {
      item = subAdminMenus[item];
      switch (item.type) {
        case "collapse":
          return false;
        //return <NavCollapse key={item.id} collapse={item} type="main" />;
        case "item":
          return <NavItem key={item.id} item={item} />;
        default:
          return false;
      }
    });
  } else if (group.children && userDetails.role === "admin") {
    const groups = group.children;
    // it can also be groups.map(item => return item)
    navItems = Object.keys(groups).map((item) => {
      item = groups[item];
      switch (item.type) {
        case "collapse":
          return false;
        //return <NavCollapse key={item.id} collapse={item} type="main" />;
        case "item":
          return <NavItem key={item.id} item={item} />;
        default:
          return false;
      }
    });
  }
  return navItems;
};

export default NavGroup;
