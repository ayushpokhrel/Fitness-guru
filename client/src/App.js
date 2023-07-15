
import {Route,Routes} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login'
import Home from './components/Home';
import UserDashboard from './components/userDashboard';
import './App.css'
import Gymtypes from './components/Gymtypes';
import Profile from './components/Profile';
import Admindash from './components/Admindash'
import About from './components/About';
import Contact from './components/Contact';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegistrationForm/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/gymtype" element={<Gymtypes/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/dashboard" element={<UserDashboard/>} />
        <Route path="/admindash" element={<Admindash/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
     </div>
  )
}

export default App