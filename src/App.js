import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from "./components/landing page";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import PostCreate from "./components/PostCreate";
import ComLanding from "./components/ComLanding";
import Explore from "./components/Explore";
import CommunityPage from "./components/CommunityPage";
import Notify from "./components/Notify";
import Message from "./components/Message";
import Chatroom from "./components/Chatroom";
import Settings from "./components/Settings";
import Profile from "./components/Profile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Notify" element={<Notify />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/PostCreate" element={<PostCreate />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/community/:id" element={<ComLanding />} />
        <Route path="/community-page" element={<CommunityPage />} />
        <Route path="/chatroom/:id" element={<Chatroom />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
