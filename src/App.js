import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import { BASE_URL, API_KEY } from './constants/index'
import Title from './Title'
import NavBar from "./NavBar";
import Details from './Details'

function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios
    .get(`${BASE_URL}api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data)
      setNasaData(res.data)
      console.log(res.data.title)
    })
    .catch(err => console.log(err))

  }, [])

  return (
    <div className="App">
      <NavBar />
      <Title title={nasaData.title} />
      <Details  url={nasaData.url} title={nasaData.title} media_type={nasaData.media_type} copyright={nasaData.copyright} explanation={nasaData.explanation} />
    </div>
  );
}

export default App;
