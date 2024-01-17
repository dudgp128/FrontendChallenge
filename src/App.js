import { Route, Routes } from "react-router-dom";
import Home from "./home/HomePage";
import OrderPage from "./order/OrderPage";
import "./App.css";
import CompletePage from "./orderResult/CompletePage";
import ErrorPage from "./orderResult/ErrorPage";
import "@fontsource/roboto";
import "@fontsource/inter";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/complete" element={<CompletePage />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  );
};
export default App;
