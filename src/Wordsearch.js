import React from "react";

export default function Wordsearch(props) {
  if (props.results.message === "Word not found") {
    return <div>Enter a word to search</div>;
  } else if (props.results) {
    return (
      <div>
        <div>{props.results.word}</div>
        <div>{props.results.phonetic}</div>
        <div>
          {props.results.meanings.map(function (value, index) {
            let definition = value.definition;
            let speech = value.partOfSpeech;
            let eg = value.example;
            console.log(value);
            return (
              <div>
                <p>Part of Speech: {speech}</p>
                <p>Definition: {definition}</p>
                <p>Example: {eg}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>null</div>;
  }
}
