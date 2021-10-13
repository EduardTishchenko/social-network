import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
console.log(classes);
const Navbar = () => {
    return (
      <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.activeLink}>profile</NavLink>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Message</NavLink>
             </div>
             <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/Users" activeClassName={classes.activeLink}>Users</NavLink>
             </div>
            <div className={classes.item}>
                <a>News</a> 
             </div>
            <div className={classes.item}>
                <a>Seting</a>  
            </div>

        </div>
        <div className={classes.item}>
          <a>
            <h2>Friends</h2>
          </a>
          
        </div>
      </nav>
    )

}
export default Navbar;