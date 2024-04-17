import React from "react";

export default function Wordsearch(props) {
  console.log(props.results.meanings);
  if (props.results.message === "Word not found") {
    return <div>Enter a word to search</div>;
  } else if (props.results) {
    return (
      <div>
        <div>{props.results.word}</div>
        <div>{props.results.phonetic}</div>
        else if (props.results.meanings) return{" "}
        {props.results.meanings.map(function (value, index) {
          return (
            <div key={index}>
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
