import React, { useState } from "react";
export default function TextForm(props) {
  const ToUpperCase = () => {
    const newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper case", "success");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };
  const ToLowerCase = () => {
    const newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower case", "success");
  };
  const clear = () => {
    const newtext = "";
    setText(newtext);
    props.showAlert("Cleared All", "success");
  };
  const Italic = () => {
    if (mystyle.fontStyle === "normal") {
      setmystyle({
        fontStyle: "italic",
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor: props.mode === "dark" ? "gray" : "white",
      });
    } else {
      setmystyle({
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor: props.mode === "dark" ? "gray" : "white",
        fontStyle: "normal",
      });
    }
    props.showAlert("Converted to Italic", "success");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };
  const [text, setText] = useState("Enter Your Text Here");
  const [mystyle, setmystyle] = useState({
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "gray" : "white",
    fontStyle: "normal",
  });
  const lengthOfWord = () => {
    let count = 0;
    for (let i = 0; i < text.split(" ").length; i++) {
      if (text.split(" ")[i] === "") {
        count++;
      }
    }
    return text.split(" ").length - count;
  };
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          style={mystyle}
          onChange={handleonchange}
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>
        <button className="btn btn-primary my-4 mx-1" onClick={clear}>
          Clear All
        </button>
        <button className="btn btn-primary my-4 mx-1" onClick={ToUpperCase}>
          Convert to UPPER CASE
        </button>
        <button className="btn btn-primary my-4 mx-1" onClick={ToLowerCase}>
          Convert to lower CASE
        </button>
        <button className="btn btn-primary my-4 mx-1" onClick={Italic}>
          Convert Text to Italic
        </button>
        <button className="btn btn-primary my-4 mx-1" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {lengthOfWord()} Words & {text.length} Characters
        </p>
        <p>{0.008 * lengthOfWord()}min to Read Text</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to Preview Text"}</p>
      </div>
    </>
  );
}
