import React from "react";

export default function SynonymsLib(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return props.synonyms.map(function (synonym, index) {
      return (
        <div key={index}>
          <ul>
            <li>{synonym}</li>
          </ul>
        </div>
      );
    });
  } else {
    return null;
  }
}
