import { signOut } from 'firebase/auth';
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Nav = () => {
    const { auth, loggedUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <img src={loggedUser?.photoURL} className="brand-img" alt="" />
                <Link to='/' className="icon" alt="myposts">
                    <span>Home</span>
                </Link>
                <input type="text" className="search-box" placeholder="search" />
                <div className="nav-items">
                    {loggedUser
                        ? <><Link to='/myposts' className="icon" alt="myposts">
                            <span>My Posts</span>
                        </Link>
                            <Link to='/create' className="icon" alt="myposts">
                                <span>Add Post</span>
                            </Link>
                            <Link to='#' className="icon" alt="myposts" onClick={onLogout}>
                                <span>Logout</span>
                            </Link></>
                        : <><Link to='/login' className="icon" alt="myposts">
                            <span>Login</span>
                        </Link>
                            <Link to='/register' className="icon" alt="myposts">
                                <span>Register</span>
                            </Link></>}
                </div>
            </div>
        </nav>
    );
}