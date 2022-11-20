import { doc, onSnapshot, updateDoc, arrayUnion } from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { database } from "../../../firebaseConfig";
import { Message } from "./Message";
import { v4 as uuidv4 } from 'uuid';

export const ChatBox = ({ id, setChatContainer }) => {
    const { loggedUser } = useContext(AuthContext);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const scroll = useRef();

    useEffect(() => {
        onSnapshot(doc(database, 'chats', id), (snapshot) => {
            setMessages(snapshot.data().messages.map((item) => {
                return { ...item };
            }));
        })
    }, []);

    const onChat = () => {
        if (input === '') {
            alert('Please enter a valid message');
            return;
        }

        updateDoc(doc(database, 'chats', id), {
            messages: arrayUnion({
                message: input,
                ownerId: loggedUser.uid,
                photoURL: loggedUser.photoURL,
                id: uuidv4()
            })
        })
            .then(() => {
                setInput('');
                scroll.current.scrollIntoView({ behavior: 'smooth' });
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <section>
            <div className="chat-popup">
                <div className="badge" onClick={() => setChatContainer(false)}>x</div>
                <div className="chat-area">
                    {messages.map(message => <Message key={message.id} message={message} scroll={scroll} />)}
                </div>
                <div className="input-area">
                    <input type="text"
                        onChange={(e) => setInput(e.target.value)}
                        value={input} />
                    <button className="submit" onClick={onChat}>
                        {" "}
                        <i className="material-icons"> send</i>
                    </button>
                </div>
            </div>
        </section>

    );
}