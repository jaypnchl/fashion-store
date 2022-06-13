import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Hats from "./pages/Hats";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<Hats />} />
      </Routes>
    </div>
  );
}

export default App;
