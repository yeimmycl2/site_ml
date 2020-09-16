import React from "react";
import NavSearchBar from "../components/navSearchBar/NavSearchBar";
import { Route, Switch } from "react-router-dom";
import ListProductsView from "./listProductView/ListProductsView";
import ProductItemView from "./productItemView/ProductItemView";

const MainView = (props) => {
  return (
    <>
      <div>
        <NavSearchBar />
      </div>
      <div>
        <Switch>
          <Route exact path="/items">
            <ListProductsView/>
          </Route>
          <Route path="/items/:id" render={({match}) => (
             <ProductItemView id={match.params.id}/>
         
          )}/>
        </Switch>
      </div>
    </>
  );
};

export default MainView;
