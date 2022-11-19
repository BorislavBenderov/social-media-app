import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { ChatBox } from "./ChatBox";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";

export const Users = ({ user }) => {
    const { loggedUser } = useContext(AuthContext);
    const [chatContainer, setChatContainer] = useState(null);
    const [id, setId] = useState(null);

    const handleSelect = async () => {
        const combinedId = loggedUser.uid > user.uid
            ? loggedUser.uid + user.uid
            : user.uid + loggedUser.uid;

        try {
            const res = await getDoc(doc(database, 'chats', combinedId));

            if (!res.exists()) {
                await setDoc(doc(database, 'chats', combinedId), {
                    messages: []
                })
            }

            setChatContainer(user);
            setId(combinedId);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <div className="profile-card">
                <div className="profile-pic">
                    <img src={user.userImageUrl} alt="" />
                </div>
                <div>
                    <p className="username">{user.displayName}</p>

                </div>
                <button className="action-btn" onClick={handleSelect}>Chat</button>
            </div>
            <div>
                {chatContainer && <ChatBox id={id} />}
                {console.log(chatContainer)}
            </div>
        </>

    );
}