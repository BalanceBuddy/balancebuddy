import "./App.css";
import React, { Component }  from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DashBoard from "./Pages/DashBoard";
import Settings from "./Pages/Settings";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;
  width: 97%;
  margin: auto;
  max-width: 100%;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
