import React, { useEffect, useRef, useState } from "react";
import CreateIto from "./CreateIto";
import CreateToken from "./CreateToken";
import CreateSeries from "./CreateSeries";
// import { EditorState } from "draft-js";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import CreateItoModal from "./CreateItoModal";
import { createIto, getSubscriptionById } from "../../../Redux/actions/actions";
import browserRoute from "../../../Constants/browserRoutes";
import {
  getDraftIto,
  getUpdateDraftsItos,
  saveIto,
  updateDraft,
} from "../../../Services/itoServices";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const CreateNewIto = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const subscriptionDetail = useSelector(
    (state) => state.subscription?.subscriptionDetail || {}
  );
  const subs = useSelector((state) => {
    return console.log("state now", state);
  });
  console.log("Subscription Details===================> :", subscriptionDetail);
  const subscriptionAdmins = useSelector(
    (state) => state.subscription?.admins || []
  );
  console.log("hello");
  const [isRequired, setIsRequired] = useState(true);

  const data = new FormData();

  console.log("data", data);
  const defaultValues = {
    ito: {
      name: "",
      alloted_admins: [],
      start_date: "",
      // editorState: EditorState.createEmpty(),
      description: "",
      term_sheets: [],
    },
    token: {
      token_symbol: "",
      token_name: "",
      supply: "",
      price: "",
      target_value: "",
      buying_spread: "",
      selling_spread: "",
      back_assets: [
        {
          weightage: "",
          asset_price: "",
          asset_value: "",
          asset_quantity: "",
          asset_id: "",
        },
      ],
    },
    series: {
      name: "",
      start_date: "",
      end_date: "",
      description: "",
      supply: "",
    },
  };

  const dataValues = {
    ito_name: "" || null,
    ito_start_date: "" || null,
    term_sheets: [] || null,
    description: "" || null,
    ito_token: "" || null,
    ito_token_symbol: "" || null,
    token_supply: "" || null,
    token_target_value: "" || null,
    token_price: "" || null,
    buying_spread: "" || null,
    selling_spread: "" || null,
    ito_series: "" || null,
    series_supply: "" || null,
    series_start_data: "" || null,
    series_end_data: "" || null,
    series_description: " " || null,
    admins: [],
  };

  const [isSubscription, setIsSubscription] = useState(false);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState(defaultValues);
  const [saveAsDraft, setSaveAsDraft] = useState(dataValues);

  const { ito, token, series } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleCreateIto = () => {
    if (ito.term_sheets?.length <= 0) {
      return toast.error("TermSheet is required");
    }
    // // If creating ITO on successful completion of subscription
    // if (isSubscription) {
    //   if (token?.supply < subscriptionDetail?.current) {
    //     return toast.error("Supply cannot be less than token supply");
    //   }

    // }

    setLoading(true);
    const data = new FormData();

    console.log("data", data);

    // ito
    data.append(`ito[name]`, ito.name);
    data.append(`ito[start_date]`, ito.start_date);
    data.append(`ito[description]`, ito.description);
    ito.alloted_admins.forEach((item, index) => {
      data.append(`ito[alloted_admins][${index}][id]`, item["id"]);
    });
    for (const key in ito.term_sheets) {
      data.append("ito.term_sheets", ito.term_sheets[key]);
    }

    // token
    for (const key in token) {
      if (typeof token[key] !== "object") {
        data.append(`token[${key}]`, token[key]);
      }
    }

    token.back_assets.forEach((back_asset, index) => {
      for (const key in back_asset) {
        const element = back_asset[key];
        data.append(`token[back_assets][${index}][${key}]`, back_asset[key]);
      }
    });

    // series

    for (const key in series) {
      if (typeof series[key] === "string") {
        data.append(`series[${key}]`, series[key]);
      }
    }

    data.append(
      `subscription_id`,
      isSubscription ? subscriptionDetail?.id : false
    );

    dispatch(
      createIto({
        formData: data,
        setFormData,
        defaultValues,
        setLoading,
        history,
      })
    );
  };

  const draftData = new FormData();
  const newArr = [];
  // const admin =  ito.alloted_admins.forEach((item, index)
  ito.alloted_admins.filter((item, index) => {
    console.log("items", item);
    newArr.push(item.id);
  });

  // console.log('fname' ,);
  console.log("%c newArr", "font-size: 2rem", newArr);
  const handleSaveasDraft = () => {
    setIsRequired(false);

    const data = {
      ito: {
        name: ito.name || null,
        alloted_admins: newArr || null,
        start_date: ito.start_date || null,
        // editorState: EditorState.createEmpty(),
        description: ito.description || null,
        term_sheets: ito.term_sheets || null,
      },
      token: {
        token_symbol: token.tokensymbol || null,
        token_name: token.token_name || null,
        supply: token.supply || null,
        price: token.price || null,
        target_value: token.target_value || null,
        buying_spread: token.buying_spread || null,
        selling_spread: token.selling_spread || null,
        back_assets: [
          {
            weightage: token.weightage || null,
            asset_price: token.asset_price || null,
            asset_value: token.asset_value || null,
            asset_quantity: token.asset_quantity || null,
            asset_id: token.asset_id || null,
          },
        ],
      },
      series: {
        name: series.name || null,
        start_date: series.start_date || null,
        end_date: series.end_date || null,
        description: series.description || null,
        supply: series.series_supply || null,
      },
    };
    dispatch(saveIto(data));

    // if (ito.term_sheets?.length <= 0) {
    //   return toast.error("TermSheet is required");
    // }
    // // If creating ITO on successful completion of subscription
    // if (isSubscription) {
    //   if (token?.supply < subscriptionDetail?.current) {
    //     return toast.error("Supply cannot be less than token supply");
    //   }

    // }

    // const data = new FormData();

    // console.log("data", data);

    // // ito
    // data.append(`ito[name]`, ito.name || null);
    // data.append(`ito[start_date]`, ito.start_date || null);
    // data.append(`ito[description]`, ito.description ||null);
    // ito.alloted_admins.forEach((item, index) => {
    //   data.append(`ito[alloted_admins][${index}][id]`, item["id"] || null);
    // });
    // for (const key in ito.term_sheets) {
    //   data.append("ito.term_sheets", ito.term_sheets[key] || null);
    // }

    // // token
    // for (const key in token) {
    //   if (typeof token[key] !== "object") {
    //     data.append(`token[${key}]`, token[key] || null);
    //   }
    // }

    // token.back_assets.forEach((back_asset, index) => {
    //   for (const key in back_asset) {
    //     const element = back_asset[key];
    //     data.append(`token[back_assets][${index}][${key}]`, back_asset[key] || null );
    //   }
    // });

    // // series

    // for (const key in series) {
    //   if (typeof series[key] === "string") {
    //     data.append(`series[${key}]`, series[key] || null);
    //   }
    // }

    // // data.append(
    // //   `subscription_id`,
    // //   isSubscription ? subscriptionDetail?.id : false || null
    // // );
  };

  useEffect(() => {
    if (
      window.location.pathname.replace(props.match.params?.id, "") ===
      browserRoute.CREATE_ITO_FOR_SUBSCIRPTION_BTN
    ) {
      dispatch(getSubscriptionById(props.match.params?.id, setIsSubscription));
    }
  }, []);

  const getDateForInputField = (dateToFormat) => {
    const atleastTwoDigits = (number) => {
      number = number?.toString();
      if (number?.length === 1) {
        return "0" + number;
      }
      return number;
    };
    const year = new Date(dateToFormat)?.getFullYear();
    const month = atleastTwoDigits(new Date(dateToFormat)?.getMonth() + 1);

    const date = atleastTwoDigits(new Date(dateToFormat)?.getDate());
    return `${year}-${month}-${date}`;
  };

  useEffect(() => {
    // If creating ITO on successful completion of subscription
    if (
      isSubscription &&
      subscriptionDetail &&
      subscriptionAdmins?.length > 0
    ) {
      const startDate = getDateForInputField(subscriptionDetail?.start_date);
      const endDate = getDateForInputField(subscriptionDetail?.end_date);
      setFormData({
        ...formData,
        ito: {
          ...ito,
          alloted_admins: [...subscriptionAdmins],
          name: subscriptionDetail?.ito_name,
          start_date: startDate,
        },
        token: {
          ...token,
          token_name: subscriptionDetail?.ito_token,
        },
        series: {
          ...series,
          name: subscriptionDetail?.ito_series,
          // supply: subscriptionDetail?.current + "",
          description: subscriptionDetail?.description,
          start_date: startDate,
          end_date: endDate,
        },
      });
    }
  }, [isSubscription, subscriptionDetail, subscriptionAdmins]);

  const location = useLocation();
  console.log("location", location);

  useEffect(() => {
    if (location.pathname === "/admin/ito-management/create-new-ito") {
      console.log("got it");
    } else {
      console.log("got it on update");
      dispatch(getDraftIto());
    }
  }, []);

  const updatedrafts = useSelector((state) => {
    return state?.ito?.draftItos;
  });

  const { id } = useParams();
  console.log("id", id);
  console.log("aa", window.location);

  const updatedDataa = useSelector((state) => {
    return state?.ito?.UpdatedData;
  });

  console.log("from api", updatedDataa);

  const updatedData = Object.assign({}, ...updatedDataa);

  console.log("donee", updatedData);

  console.log("updated", updatedDataa);

  // console.log("now check data", draftUpdatedData);

  useEffect(() => {
    dispatch(getUpdateDraftsItos(id));
  }, []);

  console.log("updatedData from api", updatedData);

  const refName = useRef();
  const refStartDate = useRef();
  const tokenName = useRef();
  const tokenSymbol = useRef();
  const tokenSupply = useRef();
  const tokenTargetValue = useRef();
  const tokenPriceDollar = useRef();
  const tokenBuyingSpread = useRef();
  const tokenSymboll = useRef();
  const sellingSpread = useRef();
  const assetType = useRef();
  const assetName = useRef();
  const weightage = useRef();
  const Value = useRef();
  const Quantity = useRef();
  const seriesName = useRef();
  const seriesSupply = useRef();
  const series_start_date = useRef();
  const series_end_date = useRef();
  const descriptionnn = useRef();

  // console.log('ref' , refCheck?.current?.value)

  const handleUpdateDraft = () => {
    const data = {
      ito: {
        name: refName || null,
        alloted_admins: "" || null,
        start_date: refStartDate || null,
        description: descriptionnn || null,
        term_sheets: "" || null,
      },
      token: {
        token_symbol: tokenSymbol || null,
        token_name: tokenName || null,
        supply: tokenSupply || null,
        price: tokenPriceDollar || null,
        target_value: tokenTargetValue || null,
        buying_spread: tokenBuyingSpread || null,
        selling_spread: sellingSpread || null,
        back_assets: [
          {
            weightage: weightage || null,
            asset_price: "" || null,
            asset_value: "" || null,
            asset_quantity: "" || null,
            asset_id: "" || null,
          },
        ],
      },
      series: {
        name: seriesName || null,
        start_date: series_start_date || null,
        end_date: series_end_date || null,
        description: descriptionnn || null,
        supply: seriesSupply || null,
      },
    };
    dispatch(updateDraft(data, id));
  };

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <form onSubmit={onSubmit}>
          <CreateIto
            {...{
              formData,
              setFormData,
              loading,
              onSubmit,
              rest: props,
              isSubscription,
              isRequired,
              setIsRequired,
              saveAsDraft,
              setSaveAsDraft,
              updatedrafts,
              location,
              updatedData,
              handleUpdateDraft,
              refName,
              refStartDate,
              tokenName,
              tokenSymbol,
              tokenSupply,
              tokenTargetValue,
              tokenPriceDollar,
              tokenBuyingSpread,
              tokenSymboll,
              sellingSpread,
              assetType,
              assetName,
              weightage,
              Value,
              Quantity,
            }}
          />
          <CreateToken
            {...{
              formData,
              setFormData,
              rest: props,
              isSubscription,
              isRequired,
              setIsRequired,
              saveAsDraft,
              setSaveAsDraft,
              updatedrafts,
              location,
              updatedData,
              handleUpdateDraft,
              refName,
              refStartDate,
              tokenName,
              tokenSymbol,
              tokenSupply,
              tokenTargetValue,
              tokenPriceDollar,
              tokenBuyingSpread,
              tokenSymboll,
              sellingSpread,
              assetType,
              assetName,
              weightage,
              Value,
              Quantity,
            }}
          />
          <CreateSeries
            {...{
              formData,
              setFormData,
              rest: props,
              isSubscription,
              isRequired,
              setIsRequired,
              saveAsDraft,
              setSaveAsDraft,
              updatedrafts,
              location,
              updatedData,
              handleUpdateDraft,
              refName,
              refStartDate,
              tokenName,
              tokenSymbol,
              tokenSupply,
              tokenTargetValue,
              tokenPriceDollar,
              tokenBuyingSpread,
              tokenSymboll,
              sellingSpread,
              assetType,
              assetName,
              weightage,
              Value,
              Quantity,
              seriesName,
              seriesSupply,
              series_start_date,
              series_end_date,
              descriptionnn,
            }}
          />
          <div className="col-md-12">
            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
              disabled={loading}
            >
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}{" "}
              CREATE NEW ITO
            </button>
          </div>
        </form>
        {location.pathname === "/admin/ito-management/create-new-ito" ? (
          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 mt-2"
            // disabled={loading}
            onClick={handleSaveasDraft}
          >
            {" "}
            SAVE AS DRAFT
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 mt-2"
            // disabled={loading}
            onClick={handleUpdateDraft}
          >
            {" "}
            UPDATE DRAFT
          </button>
        )}
      </div>
      {/* <!-- end inner row --> */}

      {/* <!-- Modal --> */}
      {show && (
        <CreateItoModal
          {...{
            show,
            setShow,
            formData,
            handleCreateIto,
            loading,
          }}
        />
      )}
      {/* <!--end Modal --> */}
    </div>
  );
};

export default CreateNewIto;
