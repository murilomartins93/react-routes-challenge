import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Products from "./routes/Products";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
