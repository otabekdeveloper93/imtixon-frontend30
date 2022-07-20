import { BsClock } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './post.scss';

const Post = ({album}) => {

    return (
        <div className='post'>
            <Link to={`/single/${album.id}`}>
                <div className='date-category'>
                    <span>{album.date}</span>
                    <span>{album.type}</span>
                </div>
                <p className='title'>{album.title}</p>
                <span className='readed'>
                    <BsClock />
                    {album.readed} minutes read
                </span>
            </Link>
        </div>
    );
};

export default Post;