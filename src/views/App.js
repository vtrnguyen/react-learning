import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListToDo from './ToDoLists/ListToDo';
// import ToDoListComponent from './Example/ToDoListComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav /> 
          <img src={logo} className="App-logo" alt="logo" />
          
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/todo" element={<ListToDo />}></Route>
              <Route path="/about" element={<MyComponent />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/users" element={<ListUser />}></Route>
              <Route path="/users/:id" element={<DetailUser />}></Route>
            </Routes>

        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>

    </BrowserRouter>
    
  );
}

export default App;
