import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { PostContext } from '../../contexts/PostContext';
import PH from '../post/cover.png';
import { Post } from './Post';

export const Posts = () => {
    const { loggedUser } = useContext(AuthContext);
    const { posts } = useContext(PostContext);
    console.log(posts);

    return (
        <section className="main">
            <div className="wrapper">
                <div className="left-col">
                    {posts.length > 0
                        ? posts.map(post => <Post key={post.id} post={post} />)
                        : <p>No posts in database!</p>}
                </div>
            </div>
        </section>
    );
}