import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import "./styles.scss";
import ProductCard from "../../components/productCard/ProductCard";
import axios from "axios";
import { updateData } from "../../redux/actions/ItemListAction";
import { showLoader, hideLoader } from "../../redux/actions/LoaderAction";
import { useQueryParam, StringParam } from "use-query-params";

const ListProductsView = (props) => {
  const [state, setState] = useState([]);
  const [query, setQuery] = useQueryParam("query", StringParam);

  useEffect(() => {
    if(query){
      fetchData(query);
    }
  }, [])

  const fetchData = async (query) => {
    const url = `${process.env.REACT_APP_API_LIST_ITEM}${query}`;
    const method = "get";
    props.showLoader();
    await axios({
      url: url,
      method: method,
      headers: {
        "x-api-key": `${process.env.REACT_APP_API_LIST_ITEM_KEY}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        let responseData = response.data;
        props.updateData({ breadcrumb: responseData.categories });
        setState(responseData.items);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(function () {
         props.hideLoader();
      });

  };

  return (
    <div className="container">
      <Breadcrumb />
      <div className="list-products-container">
        {state.length > 0 && (
          <div className="list-products-wrapper">
            <ProductCard listItems={state} />
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showLoader: () => dispatch(showLoader()),
  hideLoader: () => dispatch(hideLoader()),
  updateData: (data) => dispatch(updateData(data)),
});

export default connect(null, mapDispatchToProps)(ListProductsView);
