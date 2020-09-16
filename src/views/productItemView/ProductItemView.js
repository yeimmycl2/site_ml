import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import "./styles.scss";
import axios from "axios";
import { updateData } from "../../redux/actions/ItemListAction";
import { showLoader, hideLoader } from "../../redux/actions/LoaderAction";

const ProductItemView = (props) => {
  const [state, setState] = useState();

  useEffect(() => {
    if (props.id) {
      fetchData(props.id);
    }
  }, [props.id]);

  const fetchData = async (id) => {
    const url = `${process.env.REACT_APP_API_ITEM}${id}`;
    const method = "get";
    props.showLoader();
    await axios({
      url: url,
      method: method,
      headers: {
        "x-api-key": `${process.env.REACT_APP_API_ITEM_KEY}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        let responseData = response.data;
        if (responseData.item.id) {
          let currentBreadcrumb = [...props.breadcrumb];
          currentBreadcrumb.push(responseData.item.category)
          props.updateData({ breadcrumb: currentBreadcrumb });
          setState(responseData.item);
        }
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
      <div className="product-container">
        {state && (
          <div className="product-wrapper">
            <div className="product-detail">
              <div className="img-container">
                <img src={state.picture} alt={state.title} className="img" />
              </div>
              <div className="item-detail-container">
                <div>
                  <span className="description-detail">
                    {`${state.condition === "new" ? "Nuevo" : "Usado"} - ${
                      state.sold_quantity
                    } vendidos`}
                  </span>
                  <h2 className="title">{state.title}</h2>
                  <div className="container-price">
                    <span className="price">{`$${state.price.amount}`}</span>
                    <span className="decimals">{`${
                      state.price.decimals !== 0
                        ? "." + state.price.decimals
                        : ""
                    }`}</span>
                  </div>
                </div>
                <div className="buy-button-container">
                  <button className="buy-button">Comprar</button>
                </div>
              </div>
            </div>
            <div className="product-description">
              <h3 className="desc-title">Descripción del producto</h3>
              <p className="description">{state.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  breadcrumb: state.itemListReducer.breadcrumb,
});


const mapDispatchToProps = (dispatch) => ({
  showLoader: () => dispatch(showLoader()),
  hideLoader: () => dispatch(hideLoader()),
  updateData: (data) => dispatch(updateData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemView);
