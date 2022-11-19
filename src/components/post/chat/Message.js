export const Message = ({ message }) => {
    return (
        <div className="income-msg">
            <img src={message.photoURL} className="avatar" alt="" />
            <span className="msg">{message.message}</span>
        </div>
    );
}