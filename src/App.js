import React, { Component } from 'react'
import Navbar from './component/Navbar'
import Content from './component/Content'
import Logp from './component/Logp'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import Randompassgen from './component/Randompassgen';
import Singup from './component/Singup';



export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/Logp' element={<Logp />} />
            <Route path='/Singup' element={<Singup/>}/>
          </Routes>
          {/* <Randompassgen/> */}
        </Router>
      </div>
    )
  };
}

