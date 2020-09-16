import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Breadcrumb = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(props.breadcrumb);
  }, [props.breadcrumb]);

  return (
    <div className="breadcrumb-wrapper">
      <ul className="category-breadcrumb-container">
        {state.map((category, index) => (
          <li className="category-breadcrumb" key={category}>
            <span>{category}</span>
            {index < state.length - 1 && (
              <i className="fas fa-chevron-right"></i>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  breadcrumb: state.itemListReducer.breadcrumb,
});

export default connect(mapStateToProps)(Breadcrumb);
