import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Admin" element={<AdminDashboard />} />
          <Route exact path="/User" element={<UserDashboard />} />
          <Route exact path="/CreateEvent" element={<CreateEvent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
