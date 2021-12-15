

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW ';
const SETUSERS = 'SETUSERS';
const SETCURRENT_PAGE = 'SETCURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users:   [ ],
    pageSize: 2,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching:true 

};
       



const usersReducer = (state = initialState , action) => {
    switch (action.type) {
        case FOLLOW:
           return {...state, users:state.users.map( u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u ;}) }


        case UNFOLLOW:
           return {...state, users:state.users.map(  u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u ;}) }
        case  SETUSERS: {
            return {...state, users: action.users } 
            
            
        }
        case SETCURRENT_PAGE : {
        return {...state,currentPage:  action.currentPage } 
            
            
        }
        case TOTAL_USERS_COUNT :{
            return {...state,totalUsersCount:  action.count } 
                
                
        }
        case TOGGLE_IS_FETCHING :{
            return {...state,isFetching:  action.isFetching } 
                    
                    
        }
            
       

        default:
                return state; 
    }

   
    
}

export const follow = (userId) => ({ type:FOLLOW,userId })
export const unfollow = (userId) => ({ type: UNFOLLOW,userId  } )
export const setUsers = (users) => ({ type:SETUSERS,users } )
export const setCurrentPage = (currentPage) => ({ type:SETCURRENT_PAGE,currentPage } )
export const toggleIsFetching = (isFetching) => ({ type:TOGGLE_IS_FETCHING,isFetching } )
export const setTotalUsersCount = (totalUsersCount) => ({ type:TOTAL_USERS_COUNT,count:totalUsersCount } )
export default usersReducer;
