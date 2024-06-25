import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./context/DataProvider";
import Login from "./component/account/Login";
import Home from "./component/account/home/Home";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: 64 }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
