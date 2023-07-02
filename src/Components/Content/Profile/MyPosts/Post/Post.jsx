import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg"/>
                <p>{props.message}</p>
            </div>
            <div>
                <button>Like {props.likeCount}</button>
            </div>
        </div>
    )
}

export default Post;