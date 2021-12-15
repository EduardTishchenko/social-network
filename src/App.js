import React from 'react';
import './App.css';

import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';


import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import UsersContainer from './componets/Users/UsersContainer';
import ProfileContainer from './componets/Profile/ProfileContainer';



const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
       <Navbar/>
      <div className='app-wrapper-content'>
         <Route path='/dialogs' render={ () => <DialogsContainer   />}/>
         <Route path='/profile/:userId?' render={ () => <ProfileContainer  />} />
         <Route path='/users' render={ () => <UsersContainer/>} />

      </div>
    </div>)
}
    
  


export default App;
//store={props.store}
  