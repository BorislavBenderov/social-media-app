import { Routes, Route } from 'react-router-dom';

import { Nav } from './components/nav/Nav';
import { Posts } from './components/post/Posts';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { CreatePost } from './components/create-edit/CreatePost';
import { EditPost } from './components/create-edit/EditPost';
import { AuthContextProvider } from './contexts/AuthContext';
import { PostContextProvider } from './contexts/PostContext';
import { MyPosts } from './components/post/my-posts/MyPosts';
import { EditUser } from './components/auth/EditUser';
import { Footer } from './components/footer/Footer';
import { NotFound } from './components/not-found/NotFound';
import { UserContextProvider } from './contexts/UserContext';
import { ProtectedRoutes } from './ProtectedRoutes';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <PostContextProvider>
          <UserContextProvider>
            <Nav />
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<Posts />} />
              <Route element={<ProtectedRoutes />}>
                <Route path='/edit-user/:userId' element={<EditUser />} />
                <Route path='/myposts' element={<MyPosts />} />
                <Route path='/create' element={<CreatePost />} />
                <Route path='/edit/:postId' element={<EditPost />} />
              </Route>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
            <Footer />
          </UserContextProvider>
        </PostContextProvider>
      </div>
    </AuthContextProvider>
  );
}

export default App;
