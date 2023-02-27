import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Base/Home";
import About from "./routes/Base/About";
import Products from "./routes/Base/Products";
import NotFound from "./routes/NotFound";
import Computers from "./routes/Base/Products/Computers";
import Eletronics from "./routes/Base/Products/Eletronics";
import Books from "./routes/Base/Products/Books";
import Base from "./routes/Base";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Navigate to="/" />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Navigate to="/products/computers" />} />
            <Route path="computers" element={<Computers />} />
            <Route path="eletronics" element={<Eletronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
