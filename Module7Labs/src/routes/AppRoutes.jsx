import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginForm from "../pages/Login";



function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />

      <Route path="login" element={<LoginForm {...props} />} />

      <Route path="/about" element={<AboutPage {...props} />} />
    </Routes>
  );
}

export default AppRoutes;


