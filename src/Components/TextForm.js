import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    console.log("On Changed");
    SetText(event.target.value);
  };
  const handleupClick = () => {
    console.log("UpperCase Button is Clicked" + text);
    let newText = text.toUpperCase();
    SetText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleloClick = () => {
    console.log("Lowercase Button is Clicked" + text);
    let newText = text.toLowerCase();
    SetText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const handleCaClick = () => {
    let text1 = prompt("Enter your string here");
    let newText = text + text1;
    SetText(newText);
    props.showAlert("Concatenated Strings ", "success");
  };
  const handleClClick = () => {
    let newText = "";
    SetText(newText);
    props.showAlert("Text Clear", "success");
  };
  const [text, SetText] = useState("");

  const countWords = (str) => {
    // Initialize the word counter
    var count = 0;
    // Split the words on each
    // space character
    var split = str.split(" ");

    // Loop through the words and
    // increase the counter when
    // each split word is not empty
    for (var i = 0; i < split.length; i++) {
      if (split[i] != "") {
        count += 1;
      }
    }
    return count;
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleupClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleloClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCaClick}
        >
          Concate
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary </h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read the Text
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to preview here "}</p>
      </div>
    </>
  );
}

TextForm.prototype = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter Text here",
};
