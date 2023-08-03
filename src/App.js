import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Navbar from './componants/Navbar';
import Home from './componants/Home';
import About from './componants/About';
import NoteState from './context/notes/NoteState';
import Alert from './componants/Alert';
import Login from './componants/Login';
import SignUp from './componants/SignUp';
import LandingPage from './componants/LandingPage';
import LeftNavbar from './componants/LeftNavbar';
import Notes from './componants/Notes';
import { useState } from 'react';

function App() {
  return (
    <NoteState>
      <Router>
        <AppContent />
      </Router>
    </NoteState>
  );
}

function AppContent() {
  const location = useLocation();

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  // Check if the current path starts with "/home/"
  const isHomePath = location.pathname.startsWith("/home");

  return (
    <>
      {!isHomePath && <Navbar />}
      {isHomePath && <LeftNavbar />}
      <Alert alert={alert} />

      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home/*" element={<Home showAlert={showAlert} />} />
          <Route path="/home/allnotes" element={<Notes showAlert={showAlert} />} />
          <Route path="/home/trash" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
          <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
