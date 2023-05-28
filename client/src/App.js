
import {Route,Routes} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login'
import Home from './components/Home';
import UserDashboard from './components/userDashboard';
import './App.css'
import Gymtypes from './components/Gymtypes';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegistrationForm/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/gymtype" element={<Gymtypes/>}/>
        <Route path="/dashboard" element={<UserDashboard/>} />
      </Routes>
     </div>
  )
}

export default App