import React from 'react';
import MyPostsContainer from './MyPost/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
const Profile = (props) => {
    return ( 
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer store={props.store}  />
    </div>)



}
export default Profile;