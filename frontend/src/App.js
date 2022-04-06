import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import DashBoard from './Pages/DashBoard';
import Settings from './Pages/Settings';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
