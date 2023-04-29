import React from 'react'
import { useState } from 'react';
import './App.css';
import Homepage from './component/homepage/homepage';
import Register from './component/register/register';
import Login from './component/login/login';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';


function App() {

  const [ user, setLoginUser ] = useState({})
  return (
    <div className="App">
        <Router>
          <Routes>
           <Route exact path="/" element = 

             // conditional routing part 
             
             { user && user._id ? <Homepage/> : <Login setLoginUser={setLoginUser}/>} >
          
            </Route>  
            <Route>
            <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}> </Route>
            <Route path="/register" element={<Register/>}> </Route>
           
            </Route>
          </Routes>
         </Router>
           
    </div>
  );
}

export default App;
