import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Explore from './Pages/Explore';
import About from './Pages/About';

function App() {

  return (<Router>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/dashboard' element={< Dashboard />}></Route>
        <Route exact path='/explore' element={< Explore />}></Route>
        <Route exact path='/about' element={< About />}></Route>
      </Routes>
    </div >
  </Router >
  );
}
export default App;
