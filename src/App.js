import React, { useState, useEffect } from 'react';
import Header from './components/header/header';
import Router from './router/router';
import GlobalContext from './global/globalContext';
import { BASE_URL } from "../src/constantes/url"
import axios from "axios";
import './App.css'

function App() {

  const [resultadoBusca, setResultadoBusca] = useState([])

  useEffect((resultadoBusca, setResultadoBusca) => {

    axios.get(`${BASE_URL}i=${resultadoBusca}`)
      .then((res) => {
        setResultadoBusca(res.data)
      }).catch((err) => {
        console.log(err.response)
      })

    axios.get(`${BASE_URL}t=${resultadoBusca}`)
      .then((res) => {
        let teste = setResultadoBusca(res.data)
        console.log(teste)
      }).catch((err) => {
        console.log(err.response)
      })

    axios.get(`${BASE_URL}type=${resultadoBusca}`)
      .then((res) => {
        setResultadoBusca(res.data)
      }).catch((err) => {
        console.log(err.response)
      })

  }, [])

  const states = { resultadoBusca }
  const setters = { setResultadoBusca }

  return (
    <div className="App">
      <GlobalContext.Provider value={{ states, setters }}>
        <Header />
        <Router />
      </GlobalContext.Provider>

    </div>
  );
}

export default App;
