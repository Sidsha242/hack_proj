import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Explore from './Pages/Explore';
import About from './Pages/About';
import NewBusiness from './Pages/NewBusiness';
import {useState} from 'react'
import Protected from './Components/Protected.js'

function App() {

  const [isSignedIn, setIsSignedIn] = useState(null)
  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }

  return (<Router>
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/dashboard' element={<Protected isSignedIn={isSignedIn}> <Dashboard /> </Protected>}></Route>
        <Route exact path='/explore' element={< Explore />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/newbus' element={<Protected isSignedIn={isSignedIn}> <NewBusiness /> </Protected>}></Route>
      </Routes>
    </div >
  </Router >
  );
}
export default App;
