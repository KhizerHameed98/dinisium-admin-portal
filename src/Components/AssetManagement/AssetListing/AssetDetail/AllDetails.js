import React from "react";
import TableWithDetailButton from "../../../CommonComponents/TableWithDetailButton";
import { columns } from "./ColumnData";

export default function AllDetails(props) {
  const { allDetails } = props;
  console.log("allDetails is", allDetails);
  return (
    <div>
      <TableWithDetailButton
        columns={columns}
        data={allDetails}
        title={"All Details"}
      />
    </div>
  );
}
