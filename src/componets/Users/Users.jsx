import React from "react";
import { NavLink } from "react-router-dom";
import usersPhotos from '../../asseds/images/images.png'
import styles from './users.module.css';
import * as axios from 'axios';


let Users = (props)  => {

    let pageCount = Math.ceil ( props.totalUsersCount / props.pageSize );
    let pages = [];
    

    for (let i=1; i<= pageCount; i++) {
       pages.push(i);

    }




   return  <div>
    <div>
        {pages.map( p => {
           return <span className = {props.currentPage === p && styles.selectedPage} onClick ={ (e) => {props.onPageChanged (p);} }>{p}</span>
        })}
    </div>
    {
      props.users.map (u => <div key={u.id}>
          <span>
              <div>
                  <NavLink to= {'/profile/'+ u.id }>
                  <img src={u.photos.small !=null ? u.photos.small : usersPhotos} className = {styles.usersPhotos}/>
                  </NavLink>
              </div>


              <div>
                
                  {u.followed ? < button onClick={ () => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0//unfollow/${u.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY" : "11ba5223-868e-4b1d-a103-f871e338ca7c"
                            }
                          } ).then (response => {
                            if (response.data.resultCode === 0)  {
                                props.unfollow(u.id);
                            }    
                                  });
                      }}>Unfollow</button> 


                  : < button onClick ={ () => { 
                    axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY" : "11ba5223-868e-4b1d-a103-f871e338ca7c"
                        }
                      } ).then (response => {
                        if (response.data.resultCode === 0)  {
                            props.follow(u.id);
                        }    
                              });
                      
                     }}>Follow</button> }
                  
              </div>
          </span>
          <span> 
              <span> <div>{u.name}</div>
               <div> {u.status}</div>
              </span>
              <span>
                  <div>{"u.location.country"}</div> 
                  <div>{"u.location.city"}</div>
              </span>
          </span>

      </div>)

  }
</div>
}

export default Users;