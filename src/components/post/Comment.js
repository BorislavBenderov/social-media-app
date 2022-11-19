export const Comment = ({ comment }) => {
    return (
        <p className="comment">
            <img src={comment.commentOwnerPhoto} alt="" />
            <span>{comment.commentOwner} </span> {comment.comment}
        </p>
    );
}