import React, { Suspense } from "react";
import "./assets/css/style.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Gmi from "./pages/Gmi";
import GloopPresale from "./pages/GloopPresale";
import Vault from "./pages/Vault";
import Mint from "./pages/Mint";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='top-center' limit={1}/>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/gmi" element={<Gmi />} />
        <Route path="/gloop-presale" element={<GloopPresale />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
