import React, { useState, useEffect } from "react";
import "./styles.scss";
import freeShipping from "../../assets/images/ic_shipping.png";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(props.listItems);
  }, [props.listItems]);

  return (
    <>
      {state.map((item, index) => (
        <div key={item.id}>
          <div className="product-card-wrapper">
            <Link to={`/items/${item.id}`} className="product-img">
              <img src={item.picture} alt={item.title} className="img" />
            </Link>
            <div className="product-detail">
              <div className="product-description">
                <span>{`$${item.price.amount}${
                  item.price.decimals !== 0 ? "." + item.price.decimals : ""
                }`}</span>
                {item.free_shipping && (
                  <img
                    src={freeShipping}
                    alt="Free shipping"
                    className="img-free-shipping"
                  ></img>
                )}
              </div>
              <Link to={`/items/${item.id}`} className="link-text">
                <span className="product-title">{item.title}</span>
              </Link>

              <span className="product-title">Completo unico!</span>
            </div>
            <div className="product-address">
              <span>{item.address_state_name}</span>
            </div>
          </div>
          {index < state.length - 1 && <hr className="line-product" />}
        </div>
      ))}
    </>
  );
};

export default ProductCard;
