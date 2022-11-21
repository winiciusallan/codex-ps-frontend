import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'To do List';
  }, []);

  const user = localStorage.getItem("token")

  return(
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
