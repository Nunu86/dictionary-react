import React from "react";
import SynonymsLib from "./SynonymsLib";
import "./App.css";

export default function Wordsearch(props) {
  console.log(props.results);
  if (props.results.message === "Word not found") {
    return <div>Enter a word to search</div>;
  } else if (props.results) {
    return (
      <div>
        <div className="row2">
          <strong>Word:</strong> {props.results.word}
        </div>
        <div className="row2">
          <strong>Pronounced:</strong> {props.results.phonetic}
        </div>
        {props.results.meanings.map(function (value, index) {
          if (value.example)
            return (
              <div key={index}>
                <p>
                  <strong>Part of Speech:</strong> {value.partOfSpeech}
                </p>
                <p>
                  <strong>Definition:</strong> {value.definition}
                </p>
                <p>
                  <strong>Example:</strong> {value.example}
                </p>

                <SynonymsLib synonyms={value.synonyms} />
              </div>
            );
          else
            return (
              <div key={index}>
                <p>
                  <strong>Part of Speech:</strong> {value.partOfSpeech}
                </p>
                <p>
                  <strong>Definition:</strong> {value.definition}
                </p>

                <SynonymsLib synonyms={value.synonyms} />
              </div>
            );
        })}
      </div>
    );
  } else {
    return <div>null</div>;
  }
}
