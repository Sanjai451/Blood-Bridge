import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router
import Home from './components/Home';
import About from './components/About';
import DonateBlood from './components/DonateBlood';
import RequestBlood from './components/RequestBlood';
import ViewBlood from './components/ViewBlood';
import Camps from './components/Camps';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <>
    <UserProvider>
      <Router> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/create' element={<CreateUser/>} />
          <Route path='about' element={<About/>}/>
          <Route path='donateBlood' element={<DonateBlood/>}/>
          <Route path='requestBlood' element={<RequestBlood/>}/>
          <Route path='viewBlood' element={<ViewBlood/>}/>
          <Route path='camps' element={<Camps/>} />
          <Route path='profile' element={<Profile/>}/>
          <Route path='camps' element={<Camps/>}/>
          <Route path='about' element={<About/>}/>
        </Routes>
      </Router>
    </UserProvider>

    <div className="text-center my-5">
    <a 
      href="https://your-portfolio-link.com" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-300"
    >
      Designed and Developed by Sanjai Kumar R 
    </a>
  </div>

    </>
  );
}

export default App;
