import PH from '../post/cover.png';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { database } from '../../firebaseConfig';
import { Comments } from './comments/Comments';
import { Comment } from './comments/Comment';
import { Likes } from './likes/Likes';

export const Post = ({ post }) => {
    const { loggedUser } = useContext(AuthContext);
    const [showComments, setShowComments] = useState(false);

    const isOwner = loggedUser?.uid === post.ownerId;

    const onDelete = async () => {
        const confirmation = window.confirm('Are you sure you want to delete this post?');

        if (confirmation) {
            await deleteDoc(doc(database, 'posts', post.id));
        }
    }

    return (
        <div className="post">
            <div className="info">
                <div className="user">
                    <div className="profile-pic">
                        <img src={post.profilePic} alt="" />
                    </div>
                    <p className="username">{post.profileName}</p>
                </div>
                {isOwner
                    ? <a className="options" onClick={onDelete}>Delete</a>
                    : ''}

            </div>
            <img src={post.imageUrl} className="post-image" alt="" />
            <div className="post-content">
                <div className="reaction-wrapper">
                    <Likes post={post} />
                </div>
                <p className="likes">{post.likes.length > 0 ? post.likes.length : ''}</p>
                <p className="description">
                    <span>{post.profileName} </span> {post.description}
                </p>
                <div className='comment-all' onClick={() => setShowComments(true)}>
                    {post.comments.length > 0 && showComments
                        ? post.comments.map(comment => <Comment key={comment.commentId} comment={comment} postId={post.id} />)
                        : <p>View comments</p>}
                </div>

            </div>
            {loggedUser
                ? <Comments postId={post.id} />
                : ''}
        </div>
    );
}