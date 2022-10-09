import './App.css';
import BottomBar from './components/BottomBar';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Contact/>
      <BottomBar/>
    </div>
  );
}

export default App;
