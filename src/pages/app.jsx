import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top from "./Top";
import Resources from "./resources";
import Login from "./login";
import DoctorLogin from "./doctorlogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/reso" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctorlogin" element={<DoctorLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
