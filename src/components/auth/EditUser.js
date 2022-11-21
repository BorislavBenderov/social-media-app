import { doc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { database, storage } from "../../firebaseConfig";

export const EditUser = () => {
    const navigate = useNavigate();
    const { loggedUser } = useContext(AuthContext);

    const onEditUser = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const userImageUrl = formData.get('userImageUrl');

        if (userImageUrl.name === '') {
            alert('Please import an image');
            return;
        }

        const storageRef = ref(storage, `/users/${loggedUser.displayName}`);
        const uploadTask = uploadBytesResumable(storageRef, userImageUrl);
        uploadTask.on('state_changed',
            (snapshot) => {
            },
            (err) => {
                alert(err.message);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadUrl) => {
                        updateProfile(loggedUser, {
                            photoURL: downloadUrl
                        });
                        updateDoc(doc(database, 'users', loggedUser.uid), {
                            userImageUrl: downloadUrl
                        })
                            .then(() => {
                                navigate('/');
                            })

                    })
                    .catch((err) => {
                        alert(err.message);
                    })
            })

    }

    return (
        <form className='auth' onSubmit={onEditUser}>
            <h3>Edit User Photo</h3>
            <input type="file" placeholder="Choose a file" id="userImageUrl" name="userImageUrl" />
            <button type="submit">Edit</button>
        </form>
    );
}