import './App.css';
import './shared/style.css'
import Navigation from './shared/Navigation';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import About from './pages/About';
import Sheep from './pages/Sheep';
import Alpaca from './pages/Alpaca';

function App() {
  return (
    <div className="App">
      <Navigation>
        
      </Navigation>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/sheep' element={<Sheep />} />
          <Route path='/alpaca' element={<Alpaca />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
