import './posts.css';
import PH from '../post/cover.png';

export const Posts = () => {
    return (
        <section class="main">
            <div className="wrapper">
                <div className="left-col">
                    <div className="post">
                        <div className="info">
                            <div className="user">
                                <div className="profile-pic">
                                    <img src={PH} alt="" />
                                </div>
                                <p className="username">modern_web_channel</p>
                            </div>
                            <img src={PH} className="options" alt="" />
                        </div>
                        <img src={PH} className="post-image" alt="" />
                        <div className="post-content">
                            <div className="reaction-wrapper">
                                <img src={PH} className="icon" alt="" />
                                <img src={PH} className="icon" alt="" />
                            </div>
                            <p className="likes">1,012 likes</p>
                            <p className="description">
                                <span>username </span> Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Pariatur tenetur veritatis placeat, molestiae
                                impedit aut provident eum quo natus molestias?
                            </p>
                        </div>
                        <div className="comment-wrapper">
                            <img src={PH} className="icon" alt="" />
                            <input
                                type="text"
                                className="comment-box"
                                placeholder="Add a comment"
                            />
                            <button className="comment-btn">post</button>
                        </div>
                    </div>

                    <div className="post">
                        <div className="info">
                            <div className="user">
                                <div className="profile-pic">
                                    <img src={PH} alt="" />
                                </div>
                                <p className="username">modern_web_channel</p>
                            </div>
                            <img src={PH} className="options" alt="" />
                        </div>
                        <img src={PH} className="post-image" alt="" />
                        <div className="post-content">
                            <div className="reaction-wrapper">
                                <img src={PH} className="icon" alt="" />
                                <img src={PH} className="icon" alt="" />
                            </div>
                            <p className="likes">1,012 likes</p>
                            <p className="description">
                                <span>username </span> Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Pariatur tenetur veritatis placeat, molestiae
                                impedit aut provident eum quo natus molestias?
                            </p>
                        </div>
                        <div className="comment-wrapper">
                            <img src={PH} className="icon" alt="" />
                            <input
                                type="text"
                                className="comment-box"
                                placeholder="Add a comment"
                            />
                            <button className="comment-btn">post</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}