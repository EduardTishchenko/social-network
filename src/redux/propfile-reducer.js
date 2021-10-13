const ADD_POST ='ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message:'Hi, haw a you?', likesCount: 12},
        {id: 2, message:'Its my first post', likesCount: 11}
    ], 
};
       



const profileReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_POST: {
        let newPost = {
                id: 3,
                message: state.newPostText,
                
        };
        return {...state,posts:[...state.posts,newPost],newPostText : ''};
           
        };
        case APDATE_NEW_POST_TEXT: {
            return {...state,newPostText: action.newText};

           
        };
        default:
                return state; 
    }

   
    
}

export const addPostActionCreator = () => ({ type:ADD_POST })

export const apdateNewPostTextActionCreator = (text) => ({ type: APDATE_NEW_POST_TEXT , newText: text } )

export default profileReducer;