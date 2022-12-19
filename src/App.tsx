import { Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome';
import { Route } from 'react-router';
import Message from './components/Message';

const initialState = {
  name: 'Test',
  message: 'TSX React App'
};

type State = Readonly<typeof initialState>;

function App() {

  let value: string = "React Developer";

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Welcome message={'Welcome Message from parent!'} />} />
        </Routes>
      </BrowserRouter>
      <Message />
    </div>
  );
}

export default App;
