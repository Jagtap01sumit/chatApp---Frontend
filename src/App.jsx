import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  <meta property="og:image" content="/social-card.png" />;
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Signup />}></Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        ></Route>
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <Signup />}
        ></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
