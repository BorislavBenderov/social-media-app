import { createContext, useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { database } from '../firebaseConfig';

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [select, setSelect] = useState(null);

    useEffect(() => {
        const q = query(collection(database, 'posts'), orderBy("timestamp", "desc"));
        onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((item) => {
                return { ...item.data(), id: item.id };
            }))
        })
    }, []);

    return (
        <PostContext.Provider value={{ posts, select, setSelect }}>
            {children}
        </PostContext.Provider>
    );
}