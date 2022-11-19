import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { UserContext } from "../../../contexts/UserContext";
import { ChatBox } from './ChatBox';
import { Users } from "./Users";

export const Chat = () => {
    const { loggedUser } = useContext(AuthContext);
    const { users } = useContext(UserContext);

    const otherUsers = users.filter(x => x.uid !== loggedUser.uid);

    return (
        <div className="right-col">
            <div className="profile-card">
                <div className="profile-pic">
                    <img src={loggedUser.photoURL} alt="" />
                </div>
                <div>
                    <p className="username">{loggedUser.displayName}</p>
                </div>
            </div>
            <p className="suggestion-text">Chat</p>
            {otherUsers.map(user => <Users key={user.uid} user={user}/>)}
        </div>

    );
}