import React from 'react';
import classes from './ProfileInfo.module.css';
const ProfileInfo = (props) => {

if (!props.profile) {
    return null
}

    return ( 
    <div>
        <div>

        </div>
        <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        </div>
        <div className={classes.deskriptionBlock}>
            <img src={props.profile.photos}/>
            Ava + deskription
        </div>
      
    </div>)



}
export default ProfileInfo;