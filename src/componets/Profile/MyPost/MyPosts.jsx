import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Posts';
import { addPostActionCreator, apdateNewPostTextActionCreator } from '../../../redux/propfile-reducer';

const MyPosts = (props) =>{

    let postsElements = 
    props.posts.map (p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>);


    let newPostElement = React.createRef ();
    
    

    let onAddPost = () =>  {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
       
    }

    return (
        <div className={classes.postBlock}>
           <h3> My posts</h3>
            <div>
                <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                <button onClick={  onAddPost }>Add post</button>
                </div>
                
            </div>
            <div className={classes.posts}>
            {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;