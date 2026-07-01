import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OurPillars from "./pages/OurPillars";
import ActionHub from "./pages/ActionHub";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename="/tanishqgreen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-pillars" element={<OurPillars />} />
        <Route path="/action-hub" element={<ActionHub />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<OurPillars />} />
        <Route path="/our-work" element={<ActionHub />} />
        <Route path="/champions" element={<Impact />} />
        <Route path="/join-us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;