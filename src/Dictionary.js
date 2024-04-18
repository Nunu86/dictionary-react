import React, { useState } from "react";
import axios from "axios";
import Wordsearch from "./Wordsearch";

export default function Dictionary() {
  let [change, setChange] = useState("");
  let [dataOutcome, setdataOutcome] = useState(null);

  function displayResponse(response) {
    setdataOutcome(response.data);
  }

  function runSearch(event) {
    event.preventDefault();
    let key = `8ab570aff7t8c4d757b9f03613oab792`;
    let link = `https://api.shecodes.io/dictionary/v1/define?word=${change}&key=${key}`;
    axios.get(link).then(displayResponse);
  }
  function runChange(event) {
    setChange(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="mt-5" onSubmit={runSearch}>
        <input
          type="search"
          autoFocus={true}
          placeholder="🔎 Enter a word to search"
          onChange={runChange}
        />
        <input type="submit" />
      </form>

      {dataOutcome && <Wordsearch results={dataOutcome} />}
    </div>
  );
}
