import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import SignInAndSignUp from "./pages/SignInAndSignUp";

function App() {
  return (
    <div className="px-8 sm:px-[80px]">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
