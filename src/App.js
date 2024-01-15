import { Route, Routes } from "react-router-dom";
import Home from "./home/HomePage";
import OrderPage from "./order/OrderPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  );
};
export default App;
