import { Routes, Route } from 'react-router-dom';

import { Nav } from './components/nav/Nav';
import { Posts } from './components/post/Posts';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { CreatePost } from './components/create-edit/CreatePost';
import { AuthContextProvider } from './contexts/AuthContext';
import { PostContextProvider } from './contexts/PostContext';
import { MyPosts } from './components/post/my-posts/MyPosts';
import { Footer } from './components/footer/Footer';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <PostContextProvider>
          <UserContextProvider>
            <Nav />
            <Routes>
              <Route path='/' element={<Posts />} />
              <Route path='/myposts' element={<MyPosts />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/create' element={<CreatePost />} />
            </Routes>
            <Footer />
          </UserContextProvider>
        </PostContextProvider>
      </div>
    </AuthContextProvider>
  );
}

export default App;
