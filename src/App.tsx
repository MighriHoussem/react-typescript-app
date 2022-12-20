import { Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome';
import { Route } from 'react-router';
import Message from './components/Message';
import Users from './components/Users';

const initialState = {
  name: 'Test',
  message: 'TSX React App'
};

type State = Readonly<typeof initialState>;

interface User {
  id: number,
  name: string,
  age: number,
  single: boolean
};

function App() {

  let value: string = "React Developer";

  const users: Array<User> = [
    {
      id: 1,
      name: 'Houssem',
      age: 28,
      single: true
    },
    {
      id: 2,
      name: 'Ali',
      age: 38,
      single: false
    },
    {
      id: 3,
      name: 'Racem',
      age: 31,
      single: true
    }
  ];

  const currentUser: string = 'Alain Backar';

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Welcome message={'Welcome Message from parent!'} />} />
          <Route path={'/users'} element={<Users usersList={users} currentUser={currentUser} />} />
        </Routes>
      </BrowserRouter>
      <Message />
    </div>
  );
}

export default App;
