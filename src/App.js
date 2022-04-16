import React from 'react';
import './App.css';
import logo from './logo.svg';
const App= () =>{
 
    return (
        <div className='App'> 
         <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <ul className='navbar'>
           <li>Home</li>
           <li>Services</li>
           <li>About</li>
           <li>Contact</li>
         </ul>
         </header>   
         <h1 className='hello'> Hello React</h1>
         <div className='pfooter'>
           <h2>Designed By SalahAbuHmaid</h2>
           <p>All Rights Recieved</p>
         </div>
        </div>
    );
}
export default App;
 