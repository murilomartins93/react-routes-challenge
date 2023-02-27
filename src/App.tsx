import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeIndex from "./routes/Home/HomeIndex";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
            <Route index element={<HomeIndex />} />
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
