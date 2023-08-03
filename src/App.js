import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [mode2, setMode2] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Has Been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
    }
  }
  const toggleMode2 = () => {
    if (mode2 === "light") {
      setMode2("yellow");
      document.body.style.backgroundColor = "yellow";
      showAlert("Yellow Mode Has Been Enabled", "success");
    } else {
      setMode2("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode2={toggleMode2}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  className= 'mb-4'
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
