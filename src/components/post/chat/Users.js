export const Users = ({ user }) => {
    return (
        <div className="profile-card">
            <div className="profile-pic">
                <img src={user.userImageUrl} alt="" />
            </div>
            <div>
                <p className="username">{user.displayName}</p>
            </div>
            <button className="action-btn">Chat</button>
        </div>
    );
}