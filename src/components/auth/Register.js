import { updateProfile } from "firebase/auth";
import { database, storage } from "../../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { setPersistence, browserSessionPersistence, createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';

export const Register = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const onRegister = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const userName = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('repeatPassword');
        const userImageUrl = formData.get('userImageUrl');

        if (userName === '' || email === '' || password === '' || repeatPassword === '' || userImageUrl === '') {
            alert('Please fill all the fields');
            return;
        }

        setPersistence(auth, browserSessionPersistence)
            .then(async () => {
                const res = await createUserWithEmailAndPassword(auth, email, password);
                const storageRef = ref(storage, `/users/${userName}`);
                const uploadTask = uploadBytesResumable(storageRef, userImageUrl);
                uploadTask.on('state_changed',
                    (snapshot) => {
                    },
                    (err) => {
                        alert(err.message);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).
                            then((downloadUrl) => {
                                updateProfile(res.user, {
                                    displayName: userName,
                                    photoURL: downloadUrl
                                });
                                setDoc(doc(database, 'users', res.user.uid), {
                                    displayName: userName,
                                    userImageUrl: downloadUrl,
                                    uid: res.user.uid
                                })
                            })
                    })
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <form className='auth' onSubmit={onRegister}>
            <h3>Register Here</h3>
            <label htmlFor="username"></label>
            <input type="text" placeholder="Username" id="username" name="username" />
            <label htmlFor="email"></label>
            <input type="text" placeholder="Email" id="email" name="email" />
            <label htmlFor="password"></label>
            <input type="password" placeholder="Password" id="password" name="password" />
            <label htmlFor="repeatPassword"></label>
            <input type="password" placeholder="Repeat Password" id="repeatPassword" name="repeatPassword" />
            <label htmlFor="userImageUrl"></label>
            <input type="file" placeholder="Choose a file" id="userImageUrl" name="userImageUrl" />
            <button type="submit">Register</button>
        </form>
    );
}