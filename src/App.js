import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [Mode, setmode] = useState("light");
  const [ALT, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const enabletoggle = () => {
    if (Mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been Enabled", "success");
      document.title = "TextUtils-Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    // <Router>
    <>
      <Navbar
        title="TextUtils"
        abouttext="About"
        mode={Mode}
        toggle={enabletoggle}
      />
      <Alert alert={ALT} />
      {/* <Routes>
        <Route exact path="/about" element={<About />}></Route>
        <Route
          exact path="/"
          element={ */}
            <TextForm
              showAlert={showAlert}
              heading="Enter the Text"
              mode={Mode}
              toggle={enabletoggle}
            />
          
          {/* // }
    //     ></Route>
    //   </Routes>
    // </Router> */}
    </>
  );
}
export default App;
