import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Work from "./work";
import Resume from "./resume";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;