import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import usersPhotos from '../../asseds/images/images.png'
import Users from './Users';
import Preloader from '../../common/preloader/preloader';




class UsersAPIComponent extends React.Component {

    componentDidMount () {
        this.props.toggleIsFetching (true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page= ${this.props.currentPage} &count= ${this.props.pageSize}`).then (response =>{
               
        this.props.toggleIsFetching (false);
        this.props.setUsers( response.data.items);
        this.props.setTotalUsersCount( response.data.totalCount)
                
            });
    }
    
onPageChanged= (pageNumber) => {
    this.props.setCurrentPage (pageNumber);
    this.props.toggleIsFetching (true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber} &count= ${this.props.pageSize}`).then (response =>{
               
                this.props.setUsers( response.data.items);
                this.props.toggleIsFetching (false)
               
                
            });
     

}

    render()  {
        return  <> 
        { this.props.isFetching ? <Preloader/> : null }
        <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={ this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow} 
          /> 
         </>
         
    
    }

}



export default UsersAPIComponent;
