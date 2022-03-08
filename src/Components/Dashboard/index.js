import React, { useContext, useEffect, useState } from "react";
import ShortReport from "./shortReport";
// import UserChart from "./Charts/userChart";
// import InvestmentChart from "./Charts/investmentChart";
// import ITOSeriesChart from "./Charts/itoSeriesChart";
// import TokenChart from "./Charts/tokenChart";
import MarketcapLineChart from "./Charts/LineChart";
import TableWithDetailButton from "../Dashboard/TableComponent/TableWithDetailButton";
import { columns } from "./ColumnData";
import {
  getCandlestickTablePrice,
  getTokenIdForPriceHistory,
  getTokenPriceHistory,
} from "../../Services/exchangeServices";
import {
  getAllTokensDefaultData,
  getTokensMarketcap,
} from "../../Services/dashboardServices";
import { useDispatch, useSelector } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CandleChart from "../Dashboard/Charts/CandleChart";
import { DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { SideNavToggleContext } from "../../App";
import SoldTokensGraph from "./Charts/SoldTokensGraph";
import { getSoldTokensGraph } from "../../Services/dashboardServices";
import DefaultChart from "./Charts/DefaultChart";
import Select from "react-select";
import { toast } from "react-toastify";
import browserRoutes from "../../Constants/browserRoutes";
import { useHistory } from "react-router-dom";
import browserRoute from "../../Constants/browserRoutes";
import { SettingsCellOutlined } from "@material-ui/icons";

const Dashboard = () => {
  const [chartName, setChartName] = useState("PRICE HISTORY");
  const [candleGraph, showCandleGraph] = useState(true);
  const { time, setTime } = useContext(SideNavToggleContext);
  const { tokenName, setTokenName } = useContext(SideNavToggleContext);
  const [id, setId] = useState(29);
  const [table, showTable] = useState(false);
  const [buttonText, setButtonText] = useState("Token Detail");
  const [marketcapGraph, showMarketcapGraph] = useState(false);
  const [soldtokens, showSoldTokens] = useState(false);
  const [selectDefaultValue, setSelectDefaultValue] = useState();
  const [dataGraph, showDataGraph] = useState(false);

  const tabledata = useSelector(
    (state) => state?.exchange?.candleStickTableHistory?.data
  );

  const tokenID = useSelector((state) => state?.exchange?.tokenId?.data);
  const dispatch = useDispatch();
  const martketcapdata = useSelector((state) => state?.dashboard?.marketcap);
  const soldtokengragh = useSelector(
    (state) => state?.dashboard?.soldTokens?.data
  );

  // console.log(soldtokengragh);
  const allData = useSelector((state) => state?.dashboard?.allTokensData?.data);
  // console.log(allData);
  const [count, setCount] = useState(false);
  useEffect(() => {
    dispatch(getCandlestickTablePrice());
    // dispatch(getTokenIdForPriceHistory());
  }, []);
  useEffect(() => {
    dispatch(getTokenIdForPriceHistory());
    dispatch(getAllTokensDefaultData());
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
    dispatch(
      getSoldTokensGraph({
        id: id,
        name: time,
      })
    );
  }, [id, time]);

  //-----------------------------------------------------
  useEffect(() => {
    setTime("Year");
  }, []);

  useEffect(() => {
    if (tokenID && !count) {
      setId(tokenID[1].ito_id);
      setTokenName(tokenID[1].tokenName);
      setCount(true);
      setSelectDefaultValue(tokenID[1]);
    }
  }, [tokenID]);
  const handleClick = (e) => {
    e.preventDefault();
    showTable(!table);
    table
      ? setButtonText("Token Details")
      : setButtonText("Hide Token Details");
  };
  const handleClickChartButton = (e, obj) => {
    e.preventDefault();
    setChartName(obj.name);
    showCandleGraph(true);
    showMarketcapGraph(false);
    showSoldTokens(false);
    showDataGraph(false);
  };

  const handleClickId = (e) => {
    if (e) {
      console.log("%c I am working", "font-size: 2rem", e);
      setId(e.ito_id);
      setTokenName(e.tokenName);
      setSelectDefaultValue(e);
    }
  };

  const handleClickTime = (e, obj) => {
    console.log();
    e.preventDefault();
    setTime(obj.name);
  };

  const handleClickMarketCap = (e, obj) => {
    console.log("%c I am working", "font-size: 2rem", obj);
    e.preventDefault();
    setChartName(obj.name);
    showMarketcapGraph(true);
    showCandleGraph(false);
    showSoldTokens(false);
    showDataGraph(false);
  };

  const handleClickSoldTokens = (e, obj) => {
    e.preventDefault();
    setChartName(obj.name);
    showMarketcapGraph(false);
    showCandleGraph(false);
    showSoldTokens(true);
    showDataGraph(false);
  };

  const handleClicAllData = (e, obj) => {
    e.preventDefault();
    setChartName(obj.name);
    showMarketcapGraph(false);
    showCandleGraph(false);
    showSoldTokens(false);
    showDataGraph(true);
  };

  const history = useHistory();

  const clickToken = (id) => {
    console.log("id", id);
    history.push(`${browserRoute.ITO_MANAGEMENT_DETAILS_BTN}` + id);
  };

  //-----------------------------------------------------------

  return (
    <div className="col-12 col-md-10 offset-md-1">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          {/* shortReport compo */}

          <ShortReport />
        </div>
        <div className="col-12 col-md-12 mb-4 graph-card">
          <div className="row graph-intro flex  justify-content-between pl-3 pr-3 pb-3">
            <DropdownButton title={chartName} id="input-group-dropdown-1">
              <DropdownItem
                onClick={(e) =>
                  handleClickChartButton(e, {
                    name: "PRICE HISTORY",
                  })
                }
                style={{ textAlign: "center" }}
              >
                PRICE HISTORY
              </DropdownItem>

              <DropdownItem
                onClick={(e) =>
                  handleClickMarketCap(e, {
                    name: "MARKET CAP",
                  })
                }
                style={{ textAlign: "center" }}
              >
                MARKET CAP
              </DropdownItem>
              <DropdownItem
                onClick={(e) =>
                  handleClickSoldTokens(e, {
                    name: "SOLD TOKENS",
                  })
                }
                style={{ textAlign: "center" }}
              >
                SOLD TOKENS
              </DropdownItem>
              {/* <DropdownItem
                onClick={(e) =>
                  handleClicAllData(e, {
                    name: "PRICE AND MARKETCAP",
                  })
                }
                style={{ textAlign: "center" }}
              >
                PRICE AND MARKETCAP
              </DropdownItem> */}
            </DropdownButton>
            <Select
              // className="basic-single"
              // classNamePrefix="select"
              isDisabled={false}
              isLoading={false}
              isClearable={true}
              isRtl={false}
              value={selectDefaultValue && selectDefaultValue}
              isSearchable={true}
              options={
                tokenID && tokenID.length > 0
                  ? tokenID
                  : [{ label: "", value: "No Data Found" }]
              }
              onChange={handleClickId}
            />
            {/* 
            <DropdownButton title={tokenName}>
              {tokenID?.map((item) => (
                <DropdownItem
                  key={item.token_name}
                  accessKey={item.ito_id}
                  onClick={(e) => handleClickId(e)}
                  style={{ textAlign: "center" }}
                >
                  {item.token_name}
                </DropdownItem>
              ))}console.l
            </DropdownButton> */}

            <DropdownButton id="dropdown-basic-button" title={time}>
              <DropdownItem
                onClick={(e) =>
                  handleClickTime(e, {
                    name: "Year",
                  })
                }
                style={{ textAlign: "center" }}
              >
                Year
              </DropdownItem>
              <DropdownItem
                onClick={(e) =>
                  handleClickTime(e, {
                    name: "Month",
                  })
                }
                style={{ textAlign: "center" }}
              >
                Month
              </DropdownItem>
              <DropdownItem
                style={{ alignSelf: "stretch", width: "100%" }}
                onClick={(e) =>
                  handleClickTime(e, {
                    name: "Week",
                  })
                }
                style={{ textAlign: "center" }}
              >
                Week
              </DropdownItem>
              <DropdownItem
                style={{ alignSelf: "stretch", width: "100%" }}
                onClick={(e) =>
                  handleClickTime(e, {
                    name: "Day",
                  })
                }
                style={{ textAlign: "center" }}
              >
                Days
              </DropdownItem>
            </DropdownButton>
          </div>
          {candleGraph && <CandleChart tokenID={tokenID} checkDates={time} />}
          {marketcapGraph && (
            <MarketcapLineChart chartData={martketcapdata?.data} />
          )}
          {soldtokens && <SoldTokensGraph chartData={soldtokengragh} />}
          {dataGraph && <DefaultChart chartData={allData} />}
        </div>
        <div className="row flex justify-content-start mr-1 ml-1">
          <div className="">
            <button
              onClick={handleClick}
              className="btn btn-primary graph-btn "
              variant="contained"
              style={{ alignSelf: "stretch" }}
            >
              <AddCircleOutlineIcon style={{ marginRight: "10px" }} />
              {buttonText}
            </button>
          </div>
        </div>
        <br></br>

        {table ? (
          <div className="card-body srl-bar p-0  col-md-12 ">
            <br></br>
            <div className="table-responsive ">
              <TableWithDetailButton
                // data={filtertedData}
                columns={columns(clickToken)}
                title={"TOKEN DETAIL"}
                data={tabledata}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="col-12 col-md-6">{/* <UserChart /> */}</div>
        <div className="col-12 col-md-6">{/* <InvestmentChart /> */}</div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-12">{/* <ExchangeChart /> */}</div>
        {/* <div className="col-12 col-md-6">
          <ITOSeriesChart />
        </div> */}
        {/* <div className="col-12 col-md-6">
          <TokenChart />
        </div> */}
      </div>

      {/* <div className="row mt-5">
        <div className="col-12 col-md-12">
          <TokenChart />
        </div>
      </div> */}
      {/* <!-- end inner row --> */}
    </div>
  );
};

export default Dashboard;
