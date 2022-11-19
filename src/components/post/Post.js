import PH from '../post/cover.png';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { database } from '../../firebaseConfig';

export const Post = ({ post }) => {
    const { loggedUser } = useContext(AuthContext);

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
                    <img src={PH} className="icon" alt="" />
                    <img src={PH} className="icon" alt="" />
                </div>
                <p className="likes">1,012 likes</p>
                <p className="description">
                    <span>{post.profileName} </span> {post.description}
                </p>
            </div>
            <div className="comment-wrapper">
                <img src={loggedUser?.photoURL} className="icon" alt="" />
                <input
                    type="text"
                    className="comment-box"
                    placeholder="Add a comment"
                />
                <button className="comment-btn">post</button>
            </div>
        </div>
    );
}