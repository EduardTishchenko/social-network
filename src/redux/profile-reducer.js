const ADD_POST ='ADD_POST';
const APDATE_NEW_POST_TEXT = 'APDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [  ], 
    profile: null


};
       



const profileReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_POST: {
        let newPost = {
                id: 2,
                message: state.newPostText,
                
        };
        return {...state,posts:[...state.posts,newPost],newPostText : ''};
           
        };
        case APDATE_NEW_POST_TEXT: {
            return {...state,newPostText: action.newText};
        };

        case SET_USER_PROFILE: {
            return {...state,profile: action.profile};
        };
        default:
                return state; 
    }

   
    
}

export const addPostActionCreator = () => ({ type:ADD_POST })
export const setUserProfile = (profile) => ({ type:SET_USER_PROFILE,profile})

export const apdateNewPostTextActionCreator = (text) => ({ type: APDATE_NEW_POST_TEXT , newText: text } )

export default profileReducer;