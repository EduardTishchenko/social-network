import React from 'react';
import { connect } from 'react-redux';
import { follow,  setCurrentPage,    setTotalUsersCount,  setUsers, toggleIsFetching, unfollow } from '../../redux/users-reducer copy';
import UsersAPIComponent from './UsersAPIComponent';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
        
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(followAC(userId));
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId));
        },
        setUsers: (userId) =>{
            dispatch(setUsersAC(userId));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }



    }

}*/

export default connect (mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching}) (UsersAPIComponent);