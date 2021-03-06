import React, { Fragment, useEffect, useState } from "react";
import navigation from "../../../../menu-items";

const PageTitle = () => {
  const [item, setItem] = useState({});
  const [subItem, setSubItem] = useState({});
  const [subItemChild, setSubItemChild] = useState({});

  useEffect(() => {
    navigation.items.forEach((item) => {
      if (item.children) {
        item.children.forEach((child) => {
          if (window.location.pathname === child.url) {
            setItem(child);
            setSubItem({});
            setSubItemChild({});
          } else if (child.subItems) {
            child.subItems.forEach((subItem) => {
              let pathname = document.location.pathname;
              //////////////////////////////
              let pathnameLength = pathname.split("/").length;
              let lastPathnameIndex = pathname.split("/")[pathnameLength - 1];

              //check if last params index is a number (id) or not.
              if (isNaN(lastPathnameIndex)) {
                pathname = document.location.pathname;
              } else {
                if (subItem && subItem.url && subItem.url.split(":")) {
                  //Geting just those URLs where params (e.g; id) exists & Pathname and URL of subItem matches without its last index (i.e; number(e.g;2) and :id respectively)
                  let subItemParamName = subItem.url.split(":")[1];
                  if (
                    subItemParamName &&
                    pathname
                      .split("/")
                      .reverse()
                      .slice(1)
                      .reverse()
                      .join("/") ===
                      subItem.url
                        .split("/")
                        .reverse()
                        .slice(1)
                        .reverse()
                        .join("/")
                  ) {
                    setSubItem(subItem);
                    setItem({});
                    setSubItemChild({});
                  }
                }
              }
              ////////////////////
              if (pathname === subItem.url) {
                setSubItem(subItem);
                setItem({});
                setSubItemChild({});
              } else if (subItem.subItemsChildren) {
                subItem.subItemsChildren.forEach((node) => {
                  let pathnameNode = document.location.pathname;
                  ////////////////////////
                  let pathnameLengthNode = pathname.split("/").length;
                  let lastPathnameIndexNode =
                    pathname.split("/")[pathnameLengthNode - 1];

                  //check if last params index is a number (id) or not.
                  if (isNaN(lastPathnameIndexNode)) {
                    pathnameNode = document.location.pathname;
                  } else {
                    if (node && node.url && node.url.split(":")) {
                      //Geting just those URLs where params (e.g; id) exists & Pathname and URL of subItemChild matches without its last index (i.e; number(e.g;2) and :id respectively)
                      let nodeParamName = node.url.split(":")[1];
                      if (
                        nodeParamName &&
                        pathnameNode
                          .split("/")
                          .reverse()
                          .slice(1)
                          .reverse()
                          .join("/") ===
                          node.url
                            .split("/")
                            .reverse()
                            .slice(1)
                            .reverse()
                            .join("/")
                      ) {
                        setItem({});
                        setSubItem({});
                        setSubItemChild(node);
                      }
                    }
                  }
                  //////////////////////
                  if (pathnameNode === node.url) {
                    setSubItemChild(node);
                    setItem({});
                    setSubItem({});
                  }
                });
              }
            });
          }
        });
      }
    });
  }, [window.location.pathname]);
  return (
    <Fragment>
      {(Object.keys(item).length !== 0 ||
        Object.keys(subItem).length !== 0 ||
        Object.keys(subItemChild).length !== 0) && (
        <div className="col-md-12 mb-4">
          <h2 className="page-title-heading font-30">
            {Object.keys(item).length !== 0 && item.title && item.title}
            {Object.keys(subItem).length !== 0 &&
              subItem.title &&
              subItem.title}
            {Object.keys(subItemChild).length !== 0 &&
              subItemChild.title &&
              subItemChild.title}
          </h2>
        </div>
      )}
    </Fragment>
  );
};

export default PageTitle;
