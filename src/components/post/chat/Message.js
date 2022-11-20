import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export const Message = ({ message }) => {
    const { loggedUser } = useContext(AuthContext);
    const messageOwner = message.ownerId === loggedUser.uid;
    return (
        <div className="income-msg" style={{flexDirection: messageOwner ? 'row-reverse' : ''}}>
            <img src={message.photoURL} className="avatar" alt="" />
            <span className="msg">{message.message}</span>
        </div>
    );
}