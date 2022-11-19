import { useContext } from "react";
import { PostContext } from '../../../contexts/PostContext';
import { AuthContext } from "../../../contexts/AuthContext";
import { MyPost } from "./MyPost";

export const MyPosts = () => {
    const { posts } = useContext(PostContext);
    const { loggedUser } = useContext(AuthContext);

    const ownerPosts = posts.filter(post => post.ownerId === loggedUser?.uid);

    return (
        <section className="main">
            <div className="wrapper">
                <div className="left-col">
                    {ownerPosts.length > 0
                        ? ownerPosts.map(post => <MyPost key={post.id} post={post} />)
                        : <p>No posts in database!</p>}
                </div>
            </div>
        </section>
    );
}