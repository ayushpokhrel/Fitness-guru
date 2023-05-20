
import {Route,Routes} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import Home from './components/Home';
import './App.css'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/register" element={<RegistrationForm/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
     </div>
  )
}

export default App