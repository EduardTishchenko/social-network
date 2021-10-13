import React from 'react';
import { connect } from 'react-redux';
import { apdateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItems/DialogsItem';
import Message from './Message/Message';


let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        apdateNewMessageBody: (body) => {
            dispatch(apdateNewMessageBodyCreator(body));
            
        },
        sendMessage: () => {
            dispatch(sendMessageCreator ());

        }

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
