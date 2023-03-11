import React from 'react'
import Home from './Home'
import { Route , Switch } from 'react-router-dom'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';

function App() {
  return (
    <>
    <Switch>
        <Route  path="/" element={Home}></Route>
        <Route path="/about" element={About}></Route>
        <Route path="/contact" element={Contact}></Route>
        <Route path="/service" element={Service}></Route>
    </Switch>
    </>
  )
}

export default App;
