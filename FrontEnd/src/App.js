import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Landingpage/Home";
import Signup from "./Screens/Accounts/Signup";
import Login from "./Screens/Accounts/Login";
import UserDashboard from "./Screens/User/UserDashboard";
import AdminDashboard from "./Screens/Dashboard/Admin/AdminDashboard";
import ManagerDashboard from "./Screens/Dashboard/Manager/ManagerDashboard";
import SplashScreen from "./Screens/SplashScreen.js"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
          <Route path="/SplashScreen" element={<SplashScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
