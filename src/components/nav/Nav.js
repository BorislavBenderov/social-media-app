import './nav.css';

export const Nav = () => {
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <img src="" className="brand-img" alt="" />
                <input type="text" className="search-box" placeholder="search" />
                <div className="nav-items">
                    <a href='#' className="icon" alt="myposts">
                        <span>My Posts</span>
                    </a>
                    <a href='#' className="icon" alt="myposts">
                        <span>Add Post</span>
                    </a>
                    <a href='#' className="icon" alt="myposts">
                        <span>Logout</span>
                    </a>
                    <a href='#' className="icon" alt="myposts">
                        <span>Login</span>
                    </a>
                    <a href='#' className="icon" alt="myposts">
                        <span>Register</span>
                    </a>
                    <div className="icon user-profile" />
                </div>
            </div>
        </nav>
    );
}