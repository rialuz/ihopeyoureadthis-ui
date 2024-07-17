import { Icon } from "@mui/material";
import "./styles/Letters.css";
import { useState } from "react";
import { filterLetter } from "../utils/apiHelper";

function FilterLetter({ setLetters }) {
  const [query, setQuery] = useState("");

  const onInputChange = (e) => {
    setQuery(e.target.value);
  };

  const submitFilterQuery = (e) => {
    e.preventDefault();
    filterLetter(query, setLetters);
  };

  return (
    <div className="filter_container">
      <form className="filter_form" onSubmit={submitFilterQuery}>
        <label>Search For Recipient</label>
        <div className="input_container">
          <input onChange={onInputChange} />
          <button>
            <Icon>search</Icon>
          </button>
        </div>
      </form>
      {/*TO DO: Sort by Creation Date  */}
      {/* <div className="filter_sortby">
        <p>Date Created</p>
        <Icon>arrow_drop_down</Icon>
      </div> */}
    </div>
  );
}

export default FilterLetter;
