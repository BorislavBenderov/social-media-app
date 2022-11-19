import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { database } from '../../firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

export const Comments = ({ postId }) => {
    const [input, setInput] = useState('');
    const { loggedUser } = useContext(AuthContext);

    const onComment = () => {
        if (input === '') {
            alert('Please enter a valid comment');
            return;
        }

        updateDoc(doc(database, 'posts', postId), {
            comments: arrayUnion({
                comment: input,
                ownerId: loggedUser.uid,
                commentId: uuidv4(),
                commentOwnerName: loggedUser.displayName,
                commentOwnerPhoto: loggedUser.photoURL
            })
        })
            .then(() => {
                setInput('')
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <div className="comment-wrapper">
            <img src={loggedUser?.photoURL} className="icon" alt="" />
            <input
                type="text"
                className="comment-box"
                placeholder="Add a comment"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="comment-btn" onClick={onComment}>post</button>
        </div>
    );
}