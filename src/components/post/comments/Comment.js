import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";

export const Comment = ({ comment, postId }) => {
    
    const onDeleteComment = async () => {
        await updateDoc(doc(database, 'posts', postId), {
            comments: arrayRemove(comment)
        });
    };

    return (
        <div className="comment">
            <img src={comment.commentOwnerPhoto} alt="" />
            <span>{comment.commentOwner} </span>
            <p>{comment.comment}</p>
            <a onClick={onDeleteComment}>x</a>
        </div>
    );
}