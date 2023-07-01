import { Route, Routes } from "react-router";
import Home from "./components/Home";
import SingleProductPage from "./components/SingleProductPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<SingleProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
