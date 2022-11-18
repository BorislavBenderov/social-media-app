import { Nav } from './components/nav/Nav';
import { Posts } from './components/post/Posts';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';

function App() {
  return (
    <div className="App">
     <Nav />
     <Register />
    </div>
  );
}

export default App;
