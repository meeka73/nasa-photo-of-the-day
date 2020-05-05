import React, { useState, useEffect } from "react";
import Apod from "./components/APOD";
import axios from "axios";
import "./App.css";

function App() {
  const [apodData, setApodData]=useState();

    useEffect(() => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=lSBS6P75jKpBOtPJ7mn2TUT3RYSWTnQYi8e2nqvn")
        .then(response => {
          console.log(response.data);
          setApodData(response.data)
        })
        .catch(err => {
          console.log(err);
        });
    });

  return (
    <div className="App">
      
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>            
     
      <Apod data={apodData}/>   

    </div>
  );
}

export default App;
