import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router
import Home from './components/Home';
import About from './components/About';
import DonateBlood from './components/DonateBlood';
import RequestBlood from './components/RequestBlood';
import ViewBlood from './components/ViewBlood';
import Camps from './components/Camps';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router> {/* Wrap the Routes inside the Router */}
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About/>}/>
        <Route path='donateBlood' element={<DonateBlood/>}/>
        <Route path='requestBlood' element={<RequestBlood/>}/>
        <Route path='viewBlood' element={<ViewBlood/>}/>
        <Route path='camps' element={<Camps/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
