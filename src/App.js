
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,Routes, 
  Link
} from "react-router-dom"; 
import Home from './pages/Home';
// import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
