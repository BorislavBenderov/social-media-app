import { doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PostContext } from '../../contexts/PostContext';
import { database } from "../../firebaseConfig";

export const EditPost = () => {
    const { posts } = useContext(PostContext);
    const { postId } = useParams();
    const navigate = useNavigate();

    const currentPost = posts.find(post => post.id === postId);

    const [values, setValues] = useState({
        description: currentPost?.description
    });

    const changeHandler = (e) => {
        setValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    }

    const onEdit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const description = formData.get('description');

        updateDoc(doc(database, 'posts', postId), {
            description
        })
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <form className="auth" onSubmit={onEdit}>
            <h3>Edit Post</h3>
            <label htmlFor="description">Description</label>
            <textarea type="text" placeholder="Description" id="" name="description" value={values.description} onChange={changeHandler} />
            <button type="submit">Edit</button>
        </form>
    );
}