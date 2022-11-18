import { Nav } from './components/nav/Nav';
import { Posts } from './components/post/Posts';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { CreatePost } from './components/create-edit/CreatePost';

function App() {
  return (
    <div className="App">
     <Nav />
     <CreatePost />
    </div>
  );
}

export default App;
