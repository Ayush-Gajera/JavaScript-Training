// import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Assignment4/Homepage";
import About from "./Components/Assignment1/About";
// import Login from './Components/Assignment1/Login';
import Dashboard from "./Components/Assignment4/Dashboard";
import Profile from "./Components/Assignment1/Profile";
import Admin from "./Components/Assignment1/Admin";
import Unauthorized from "./Components/Assignment1/Unauthorized";
import NotFound from "./Components/Assignment1/NotFound";
import { AuthProvider } from "./Components/Assignment2/AuthContext";
import Login from "./Components/Assignment4/Login";
import Router from "./Components/Assignment3/Router";
import ProtectedRoute from "./Components/Assignment5/ProtectedRoute";
import HooksDemo from "./Components/Assignment6/Hook";

function App() {
  return (
    <>
      {/* <RouterProvider router={Router}/> */}
      <HooksDemo/>
      <AuthProvider>
        {/* <Login /> */}

        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashbord">Dashbord</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/unauthorized">Unauthorized</Link>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/unauthorized" element={<Unauthorized />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
