import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { PostContext } from '../../contexts/PostContext';
import { Chat } from './chat/Chat';
import { Post } from './Post';

export const Posts = () => {
    const { posts } = useContext(PostContext);
    const { loggedUser } = useContext(AuthContext);

    return (
        <section className="main">
            <div className="wrapper">
                <div className="left-col">
                    {posts.length > 0
                        ? posts.map(post => <Post key={post.id} post={post} />)
                        : <p>No posts in database!</p>}
                </div>
                {loggedUser
                    ? <Chat />
                    : ''}
            </div>
        </section>
    );
}