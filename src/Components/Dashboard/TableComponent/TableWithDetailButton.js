import React, { useContext, useEffect, useState } from "react";
import MaterialTable from "material-table";
import { useDispatch } from "react-redux";
import { getTokenPriceHistory } from "../../../Services/exchangeServices";
import { SideNavToggleContext } from "../../../App";
import { getTokensMarketcap } from "../../../Services/dashboardServices";

function TableWithDetailButton({ columns, data, title }) {
  const dispatch = useDispatch();

  const [id, setId] = useState(null);
  const { time, setTime } = useContext(SideNavToggleContext);
  const { tokenName, setTokenName } = useContext(SideNavToggleContext);

  useEffect(() => {
    dispatch(
      getTokenPriceHistory({
        id: id,
        name: time,
      })
    );
    dispatch(
      getTokensMarketcap({
        id: id,
        name: time,
      })
    );
  }, [id, time]);

  return (
    <div className="table-responsive">
      <MaterialTable
        title={title}
        columns={columns}
        data={data}
        //-----------------------------------------------------

        onRowClick={(event, rowData) => {
          return (
            event.preventDefault(),
            setId(rowData?.ito_id),
            setTokenName(rowData?.token_name)
            // console.log(rowData?.id)
          );
        }}
        //-----------------------------------------------------

        options={{
          actionsColumnIndex: -1,
          headerStyle: {
            backgroundColor: "#0394FD",
            color: "#FFF",
          },
        }}
        localization={{
          header: {
            actions: "",
          },
        }}
      />
    </div>
  );
}

export default TableWithDetailButton;
