import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./compoent/layout/AdminLayout";
import AuthLayout from "./compoent/layout/AuthLayout";
import LandingPage from "./pages/starter/LandingPage";
import SignIn from "./pages/auth/Signin";
import SignUp from "./pages/auth/Signup";
import MainHomePage from "./pages/dashboard/MainHomePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Route>
        <Route path="/" element={<AdminLayout />}></Route>
        <Route path="/class" element={<AdminLayout />}>
          <Route path="home" element={<MainHomePage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
