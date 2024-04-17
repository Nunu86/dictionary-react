import React from "react";

export default function Wordsearch(props) {
  console.log(props.results);
  if (props.results.message === "Word not found") {
    return <div>Enter a word to search</div>;
  } else if (props.results) {
    return (
      <div>
        <div>{props.results.word}</div>
        <div>{props.results.phonetic}</div>
        {props.results.meanings[0].map(function (value, index) {
          return (
            <div>
              <p>{value.partOfSpeech}</p>
              <p>{value.definition}</p>
              <p>{value.example}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>null</div>;
  }
}
