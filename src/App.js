import React from "react";
import "./App.scss";
import MainView from "./views/Main";
import { BrowserRouter as Router, Route  } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../src/components/loader/Loader";
import { QueryParamProvider } from "use-query-params";

const App = (props) => {
  
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <div className={props.loading ? '' : 'd-none'} >
          <Loader />
        </div>
        <div className={props.loading ? 'd-none' : ''}>
          <MainView />
        </div>
      </QueryParamProvider>
    </Router>
  );
};

const mapStateToProps = (state) => ({ loading: state.loaderReducer.loading });

export default connect(mapStateToProps)(App);
