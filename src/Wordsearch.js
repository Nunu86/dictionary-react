import React from "react";

export default function Wordsearch(props) {
  console.log(props.results.meanings);
  if (props.results.message === "Word not found") {
    return <div>Enter a word to search</div>;
  } else if (props.results) {
    return (
      <div>
        <div>Word: {props.results.word}</div>
        <div>Pronounced: {props.results.phonetic}</div>
        {props.results.meanings.map(function (value, index) {
          console.log(value.synonyms);
          return (
            <div key={index}>
              <p>Part of Speech: {value.partOfSpeech}</p>
              <p>Definition: {value.definition}</p>
              <p>Example: {value.example}</p>
              <p>Synonyms: {value.synonyms}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>null</div>;
  }
}
