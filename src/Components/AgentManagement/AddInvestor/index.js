import React, { useEffect, useState } from "react";
import Select from "react-select";
import { connect } from "react-redux";

import {
  getExchangeableTokens,
  isTokenSelected,
  getTokenDetailById,
  getOngoingSeriesById,
  isSeriesSelected,
  creatAgent,
} from "../../../Redux/actions/actions";

const AddInvestor = ({
  match,
  exchange: {
    tokenData,
    data,
    tokenSelected,
    seriesData,
    selectedSeriesData,
    seriesSelected,
  },
  getExchangeableTokens,
  isTokenSelected,
  isSeriesSelected,
  getTokenDetailById,
  getOngoingSeriesById,
  creatAgent,
}) => {
  const [formData, setFormData] = useState({
    investment: "",
  });
  const [loading, setLoading] = useState(false);

  const [itoSeriesId, setItoSeriesId] = useState("");

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let agent_id = match.params.id;

    formData.agent_id = agent_id;
    formData.ito_series = itoSeriesId;
    creatAgent({ formData, setItoSeriesId, setFormData, setLoading });
  };

  const [tokenDetail, setTokenDetail] = useState({
    tokenName: "",
    tokenSymbol: "",
  });

  const onChangeSelect = (e) => {
    if (e) {
      setTokenDetail({
        tokenName: e.token_name,
        tokenSymbol: e.token_symbol,
      });
      isTokenSelected(true, {});
      getTokenDetailById(e.id);
      getOngoingSeriesById(e.ito_id);
    } else {
      isSeriesSelected(false, {});
      isTokenSelected(false, {});
    }
  };
  const onChangeSeriesSelect = (e) => {
    if (e) {
      setItoSeriesId(e.id);
    }
  };

  useEffect(() => {
    getExchangeableTokens();
  }, []);

  return (
    <div className="col-12 col-md-8 offset-md-2">
      {/* <!-- inner row --> */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body p-5">
              <form className="form" onSubmit={onSubmit}>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <div className="" style={{ width: "100%" }}>
                      <div className="form-group">
                        <label>Select Token</label>
                        <Select
                          style={{ width: "auto" }}
                          className="basic-single w-100"
                          classNamePrefix="select"
                          defaultValue={[]}
                          isDisabled={false}
                          isLoading={false}
                          isClearable={true}
                          isRtl={false}
                          isSearchable={true}
                          name="color"
                          options={data && data.length > 0 ? data : []}
                          onChange={onChangeSelect}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 ">
                    <div className="">
                      <div className="form-group">
                        <label>Select Series</label>
                        <Select
                          style={{ width: "auto" }}
                          className="basic-single w-100"
                          classNamePrefix="select"
                          //   defaultValue={data[0]}
                          isDisabled={false}
                          isLoading={false}
                          isClearable={true}
                          isRtl={false}
                          isSearchable={true}
                          name="color"
                          options={
                            seriesData && seriesData.length > 0
                              ? seriesData
                              : []
                          }
                          onChange={onChangeSeriesSelect}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Amount</label>
                      <input
                        type="number"
                        placeholder="Amount"
                        className="form-control py-4"
                        name="investment"
                        value={formData.investment}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-12  mt-3">
                    <button
                      type="submit"
                      className="btn btn-dark  btn-lg"
                      disabled={loading}
                    >
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}{" "}
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end inner row --> */}
    </div>
  );
};



const mapStateToProps = (state) => ({
  exchange: state.exchange,
});

export default connect(mapStateToProps, {
  getExchangeableTokens,
  isTokenSelected,
  getTokenDetailById,
  getOngoingSeriesById,
  isSeriesSelected,
  creatAgent,
})(AddInvestor);
