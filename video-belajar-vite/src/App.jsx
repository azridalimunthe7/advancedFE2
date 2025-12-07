import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"; // import Home.jsx
import Login from "./pages/Login.jsx"; // import Login.jsx
import Register from "./pages/Register.jsx"; // import Register.jsx

function App() {
  return (
    // <BrowserRouter> wajib!
    <BrowserRouter>
      {/* <Routes> ini route library react */}
      <Routes>
        {/* Path "/" -> Home */}
        <Route path="/" element={<Home />} />

        {/* Path "/login" -> Login */}
        <Route path="/login" element={<Login />} />

        {/* Path "/register" -> Register */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
