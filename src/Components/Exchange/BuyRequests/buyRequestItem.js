// import React, { useState } from "react";
// import Moment from "react-moment";
// import { connect } from "react-redux";
// import { approveOrderRequest } from "../../../Redux/actions/actions";

// const BuyRequestItem = ({ item, approveOrderRequest }) => {
//   const [disable, setDisable] = useState(false);

//   const approveTransaction = (e) => {
//     e.preventDefault();
//     approveOrderRequest({ exchangeId: item.id, setDisable });
//   };
//   return (
//     <>
//       <td className="fn-600">{`${item.fname} ${item.lname}`}</td>
//       <td className="fn-600">{item.token_name}</td>
//       <td className="fn-600">{item.token_symbol}</td>
//       <td className="fn-600">{item.amount}</td>
//       <td className="text-dr-blu">
//         <span className="pro-date mb-0">
//           <i className="far fa-calendar mr-1"></i>
//           <Moment format="D MMM YYYY" withTitle>
//             {item && item.created_at}
//           </Moment>
//         </span>
//       </td>

//       <td>
//         <button
//           className="dls-btn bg-semi-black text-white btn btn-dark"
//           onClick={approveTransaction}
//           disabled={item.disable === undefined ? false : item.disable}
//         >
//           Confirm
//         </button>
//       </td>
//     </>
//   );
// };

// export default connect(null, { approveOrderRequest })(BuyRequestItem);
