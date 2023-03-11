import './App.css';
import Episodes from './Episodes'
import image from './image.png';

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <h1>LOREM IPSUM</h1>
      </header>
      <div className="container">
        <div className="left">
          <div className="main-text">
          <h2>Episodes of the 4th seasion of the series Rick and Morty</h2>
          </div>
          <div className="image-container">
             <img src={image} alt="Rick and Morty coming out of a portal" />
          </div>
        </div>
        <div className="right">
          <Episodes/>
        </div>
      </div>
      <footer className="footer">
          <p>LOREM IPSUM © 2021</p>
      </footer>
    </div>
  );
}

export default App;
