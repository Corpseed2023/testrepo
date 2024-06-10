import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import HomePage from "./component/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaimPage from "./Home/MaimPage";
import Login from "./component/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MaimPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
