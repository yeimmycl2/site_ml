import React, { useState } from "react";
import searchIcon from "../../assets/images/ic_Search.png";
import "./styles.scss";

const SearchInputBar = (props) => {
  const [state, setState] = useState("");

  return (
    <form className="search-input-bar-wrapper">
      <input
        type="text"
        name="query"
        className="input-bar"
        placeholder="Nunca dejes de buscar"
        onChange={(event) => setState(event.target.value)}
      />
      <button
        type="submit"
        className="button-bar"
        onClick={() => props.searchItem(state)}
      >
        <img src={searchIcon} alt="Buscar" />
      </button>
    </form>
  );
};

export default SearchInputBar;
