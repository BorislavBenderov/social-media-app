import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Nav = () => {
    const { loggedUser } = useContext(AuthContext);
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <img src={loggedUser?.photoURL} className="brand-img" alt="" />
                <input type="text" className="search-box" placeholder="search" />
                <div className="nav-items">
                    <Link to='/myposts' className="icon" alt="myposts">
                        <span>My Posts</span>
                    </Link>
                    <Link to='/create' className="icon" alt="myposts">
                        <span>Add Post</span>
                    </Link>
                    <Link to='#' className="icon" alt="myposts">
                        <span>Logout</span>
                    </Link>
                    <Link to='/login' className="icon" alt="myposts">
                        <span>Login</span>
                    </Link>
                    <Link to='/register' className="icon" alt="myposts">
                        <span>Register</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}