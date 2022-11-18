import './nav.css';

export const Nav = () => {
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <img src="" className="brand-img" alt="" />
                <input type="text" className="search-box" placeholder="search" />
                <div className="nav-items">
                    <img src="" className="icon" alt="myposts" />
                    <img src="" className="icon" alt="add" />
                    <div className="icon user-profile" />
                </div>
            </div>
        </nav>
    );
}