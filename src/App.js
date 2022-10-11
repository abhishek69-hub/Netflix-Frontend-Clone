
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,Routes, 
  Link
} from "react-router-dom"; 
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';

// import Main from './components/Main';

function App() { 
  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar/> 
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        
          <Route path='/account' element={<ProtectedRoute>
            <Account />
          </ProtectedRoute>} />
      </Routes>
      </AuthContextProvider> 
      
    </div>
  );
}

export default App;
