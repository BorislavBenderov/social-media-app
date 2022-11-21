import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export const Message = ({ message, scroll }) => {
    const { loggedUser } = useContext(AuthContext);
    const messageOwner = message.ownerId === loggedUser.uid;
    return (
        <div className="income-msg" style={{flexDirection: messageOwner ? 'row-reverse' : ''}} ref={scroll}>
            <img src={message.photoURL} className="avatar" alt="" />
            <span className="msg" style={{backgroundColor: messageOwner ? 'dodgerblue' : 'gray'}}>{message.message}</span>
        </div>
    );
}