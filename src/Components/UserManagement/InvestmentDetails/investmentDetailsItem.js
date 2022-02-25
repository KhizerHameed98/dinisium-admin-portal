import React from "react";

const InvestmentDetailsItem = ({ investmentDetailsData }) => {
  return (
    <>
      {console.log(investmentDetailsData)}
      <td>{investmentDetailsData?.ito_name}</td>
      {/* { <td>{investmentDetailsData?.symbol}</td>  } */}
      <td>{investmentDetailsData?.balance}</td>
    </>
  );
};

export default InvestmentDetailsItem;
