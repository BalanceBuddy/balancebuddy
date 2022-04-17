import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './Pages/DashBoard';
import Settings from './Pages/Settings';
import Login from './Pages/Login';

import Signup from './Pages/Signup/Signup';
import MotivationUpload from './Pages/Signup/MotivationUpload.js';
import ImageUpload from './Pages/Signup/ImageUpload';
import CalendarAccess from './Pages/Signup/CalendarAccess';
import CalendarAccepted from './Pages/Signup/CalendarAccepted';
import CalendarDenied from './Pages/Signup/CalendarDenied';
import AssessmentPageOne from './Pages/Signup/AssessmentPageOne';
import AssessmentPageTwo from './Pages/Signup/AssessmentPageTwo';
import LoadingDashboard from './Pages/Signup/LoadingDashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/motivation-upload' element={<MotivationUpload />} />
        <Route path='/image-upload' element={<ImageUpload />} />
        <Route path='/calendar-access' element={<CalendarAccess />} />
        <Route path='/calendar-access-accepted'element={<CalendarAccepted />} />
        <Route path='/calendar-access-denied' element={<CalendarDenied />} />
        <Route path='/assessment-page1' element={<AssessmentPageOne />} />
        <Route path='/assessment-page2' element={<AssessmentPageTwo />} />
        <Route path='/loading-dashboard' element={<LoadingDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
