import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import DashBoard from './Pages/DashBoard';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import CalendarAccess from './Pages/CalendarAccess';
import CalendarAccepted from './Pages/CalendarAccepted';
import CalendarDenied from './Pages/CalendarDenied';
import Settings from './Pages/Settings';
import { Routes, Route, Link } from "react-router-dom";
import styled from 'styled-components';

const MainContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 80px;
  width: 80%;
  margin: auto;
  max-width: 1200px;
`
const SignUpContainer = styled.div`
  justify-content: center;
`

function App() {
  return (
    <div className="App">
      
         
      <SignUpContainer>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calendar-access" element={<CalendarAccess />} />
          <Route path="/calendar-access-accepted" element={<CalendarAccepted />} />
          <Route path="/calendar-access-denied" element={<CalendarDenied />} />

        </Routes>
      </SignUpContainer>

      <MainContainer>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </MainContainer>
 

    </div>
  );
}

export default App;
