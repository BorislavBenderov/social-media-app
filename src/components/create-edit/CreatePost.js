import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, database } from '../../firebaseConfig';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { v4 as uuidv4 } from 'uuid';

export const CreatePost = () => {
    const { loggedUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onCreate = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const imageUrl = formData.get('imageUrl');
        const description = formData.get('description');

        if (description === '' || imageUrl.name === '') {
            alert('Please fill all the fields');
            return;
        }

        const storageRef = ref(storage, `/posts/${uuidv4()}`);
        const uploadTask = uploadBytesResumable(storageRef, imageUrl);
        uploadTask.on('state_changed',
            (snapshot) => {
            },
            (error) => {
                alert(error.message)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        const postData = {
                            description,
                            imageUrl: downloadURL,
                            timestamp: serverTimestamp(),
                            ownerId: loggedUser.uid,
                            profilePic: loggedUser.photoURL,
                            profileName: loggedUser.displayName,
                            likes: [],
                            comments: []
                        }

                        addDoc(collection(database, 'posts'), postData)
                            .then(() => {
                                navigate('/');
                            })
                            .catch((err) => {
                                alert(err.message);
                            })
                    });
            }
        );
    }

    return (
        <form className="auth" onSubmit={onCreate}>
            <h3>Create Post</h3>
            <label htmlFor="imageUrl"></label>
            <input type="file" placeholder="Image" id="imageUrl" name="imageUrl" />
            <label htmlFor="description"></label>
            <textarea type="text" placeholder="Description" id="description" name="description" />
            <button type="submit">Create</button>
        </form>
    );
}