import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import Context from "./Context";
import { useEffect, useState } from "react";

export default function App() {
  const endpoint = 'fotos.json'

  const [result, setResults] = useState([])
  const EstadoGlobal = { result, setResults }

  useEffect(() => {
    fetch(endpoint).then(resp => resp.json())
      .then(data => {
        setResults(data.photos)
      
  })

  }, [])

  return (
    <div className="App">
      <Context.Provider value={EstadoGlobal}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
