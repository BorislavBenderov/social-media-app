import { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import { Post } from './Post';

export const Posts = () => {
    const { posts } = useContext(PostContext);

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