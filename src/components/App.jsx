import { Routes, Route } from "react-router-dom";
import Portofolio from "./Portofolio";
import AnyRoute from "./AnyRoute";

import '../styles/index.css';
function App() {
  return (
    <Routes>
      <Route path="/Portofolio" element={<Portofolio />} />
      <Route path="*" element={<AnyRoute />} />
      <Route path="/" element={<Portofolio />} />
    </Routes>
  );
}

export default App;
