import { Routes, Route } from 'react-router-dom';

import { Nav } from './components/nav/Nav';
import { Posts } from './components/post/Posts';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { CreatePost } from './components/create-edit/CreatePost';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<CreatePost />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
