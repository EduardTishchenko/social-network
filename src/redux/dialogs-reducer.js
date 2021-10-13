const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE ='SEND_MESSAGE';

let initialState = {
    dialogs: [
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
};

const dialogsReducer = (state = initialState,action) => {
    
    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
           return {...state,newMessageBody: action.body};
            
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            

            return {...state,newMessageBody: '',messages:[...state.messages,{id: 5, message: body}]}
            
        default:
             return state;
    }

};

export const sendMessageCreator = () => ({ type:SEND_MESSAGE })
export const apdateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY , body: body } )


export default dialogsReducer;