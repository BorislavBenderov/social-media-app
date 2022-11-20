import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { database } from "../../../firebaseConfig";

export const Comment = ({ comment, postId }) => {
    const { loggedUser } = useContext(AuthContext);

    const commentOwner = loggedUser?.uid === comment.ownerId;

    const onDeleteComment = async () => {
        const confirmation = window.confirm('Are you sure you want to delete this comment?');
        if (confirmation) {
            await updateDoc(doc(database, 'posts', postId), {
                comments: arrayRemove(comment)
            });
        }
    };

    return (
        <div className="comment">
            <img src={comment.commentOwnerPhoto} alt="" />
            <span>{comment.commentOwnerName} </span>
            <p>{comment.comment}</p>
            {commentOwner
                ? <i className="fa fa-times-circle" aria-hidden="true" onClick={onDeleteComment}></i>
                : ''}

        </div>
    );
}