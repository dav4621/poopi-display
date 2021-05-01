import logo from './poopi.png';
import './App.css';
import GetRequest from './components/GetRequest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>pooPi<img src={logo} className="App-logo" alt="logo" /></h1>
        <p>Because we shouldn't have to smell it...</p>
        <GetRequest />
      </header>
    </div>
  );
}

export default App;