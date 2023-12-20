import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import ListToDo from './ToDoLists/ListToDo';
// import ToDoListComponent from './Example/ToDoListComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple To do app with origin dev
        </p>
        
        {/* <MyComponent/> */}
        {/* <ToDoListComponent /> */}
        <ListToDo />
        
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
  );
}

export default App;
