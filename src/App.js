import React from 'react';
import './App.css';
import Navbar from './componets/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './componets/Dialogs/DialogsContainer';

import ProfileContainer from './componets/Profile/ProfileContainer';
import HeaderContainer from './componets/Header/HeaderContainer';
import UsersContainer from './componets/Users/UsersContainer';



const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
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
  