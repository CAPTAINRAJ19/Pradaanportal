import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Community from './pages/community';
import Contribute from './pages/Contribute';
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import Abou from "./pages/Abou";
import Contact from "./pages/Contact";

import './App.css'

function App() {
  

  return (
  <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/contribute' element={<Contribute/>}/>
        <Route path='/pay' element={<Pay/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/about' element={<Abou/>}/>
        <Route path='*' element={<h1>Error 404 Page not found</h1>}/>
      </Routes>
    </Router>
    
  </div>
  )
}

export default App
