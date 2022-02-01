import logo from './logo.svg';
import './App.css';
import ImgFetch from './components/ImgFetch/ImgFetch.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < ImgFetch />
      </header>
    </div>
  );
}

export default App;
