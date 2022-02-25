export const columns = (viewDetails) => {
  return [
    { title: "Series Name", field:"name" },
    { title: "Supply" , field:"supply" },
  //   { title: "ITO Selected" , field:""},
    { title: "Start_Date" , field:"start_date"},
    { title: "End_Date" , field:"end_date" },
    { title: "Description" ,field:"description"},
    {title:"Status" , field:"status"} , 
    {
      title: null,
      field: "button",
      render: (rowData) => (
    
   
          <button
            style={{ marginRight: "3%" }}
            className="dls-btn bg-semi-black text-white width-max-content"
           onClick={()=>viewDetails(rowData.id)}
          >
            View Details
          </button>
 
      ),
    },
  ];
};
