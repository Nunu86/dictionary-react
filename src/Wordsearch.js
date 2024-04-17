import React from "react";

export default function Wordsearch(props) {
  console.log(props.results);

  if (props.results.message === "Word not found") {
    return <div>Enter a word to search</div>;
  } else if (props.results) {
    return (
      <div>
        <div>hello</div>
      </div>
    );
  } else {
    return null;
  }
}
