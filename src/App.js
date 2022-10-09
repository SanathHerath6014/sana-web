import './App.css';
import BottomBar from './components/BottomBar';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Sectors from './pages/Sectors';

import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sectors" element={<Sectors />} />
        </Route>
      </Routes>
      <BottomBar/>
    </div>
  );
}

export default App;
