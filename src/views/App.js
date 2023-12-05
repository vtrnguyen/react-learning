import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with React JS!
        </p>
        
        <MyComponent/>
        
      </header>
    </div>
  );
}

export default App;
