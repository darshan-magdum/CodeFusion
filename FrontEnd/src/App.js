import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Landingpage/Home";
import Signup from "./Screens/Accounts/Signup";
import Login from "./Screens/Accounts/Login";
import UserDashboard from "./Screens/User/UserDashboard";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
