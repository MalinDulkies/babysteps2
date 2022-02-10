import logo from './logo.svg';
import './App.css';
import DisplayGif from './components/GifGallery/GifGallery.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < DisplayGif />
      </header>
    </div>
  );
}

export default App;
