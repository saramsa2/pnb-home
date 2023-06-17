import logo from './logo.svg';
import './App.css';
import './shared/style.css'
import Navigation from './shared/Navigation';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navigation>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Navigation>
    </div>
  );
}

export default App;
