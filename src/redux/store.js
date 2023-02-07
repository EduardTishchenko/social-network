import dilogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer ";


let store = {
     _state: {
        profilePage : {
        posts: [
            {id: 1, message:'Hi, haw a you?', likesCount: 12},
            {id: 2, message:'Its my first post', likesCount: 11}
        ], 
       
        },
        dialogsPage : {dialogs: [
            {id: 1, name:'Dimon'},
            {id: 2, name:'Sveta'},
            {id: 3, name:'Viktor'},
            {id: 4, name:'Valera'},
            {id: 5, name:'Tony'}
        ],
        messages: [
            {id: 1, message:'Hi'},
            {id: 2, message:'How is yuor it'},
            {id: 3, message:'YO Bro'},
            {id: 4, message:'Yo Bro'}
        ],
        newMessageBody: ""
        },
       sidebar:{}
    
    },
    getState () {
        return this._state;
    },

    _callSubscriber() {
        console.log ('State changed ');
    },
    subscribe  (observer)  {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dilogsReducer (this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer (this._state.sidebar, action);

        this._callSubscriber(this._state);
        
    }


}

window.store = store;
export default store;