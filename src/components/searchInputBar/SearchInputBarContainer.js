import React from "react";
import SearchInputBar from "./SearchInputBar";
import { useHistory } from "react-router-dom";

const SearchInputBarContainer = (props) => {
  let history = useHistory();

  const searchItem = (query) => {
    if (query) {
      history.push({
        pathname: "/items",
        search: "?search=" + query,
      });
    }
  };

  return <SearchInputBar searchItem={searchItem} />;
};

export default SearchInputBarContainer;
