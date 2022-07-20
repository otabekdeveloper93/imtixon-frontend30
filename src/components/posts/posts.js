import { useContext } from 'react';
import { PostsContext } from "../../context/postContext";
import Post from '../post/post';
import './posts.scss';

const Posts = () => {

    const {pagenatedAlbum} = useContext(PostsContext);
    

    return (
        <div className="posts-box">
            <p>Recent Posts</p>
           {pagenatedAlbum?.map(item =>  <Post album={item} key={item.id}/>)}
        </div>
    );
};

export default Posts;