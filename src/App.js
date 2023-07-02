import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile/Profile";
import Dialogs from "./Components/Content/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./Components/Content/News/News";
import Music from "./Components/Content/Music/Music";
import Settings from "./Components/Content/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className={"app-wrapper"}>
          <Navbar />
          <div className={"app-wrapper-content"}>
            <Routes>
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/messages/*" element={<Dialogs />} />
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
