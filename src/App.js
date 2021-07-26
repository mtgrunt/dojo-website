import './App.css';

function App() {
  const title = 'Welcome To My Website';
  const delights = 50;

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Delighted { delights } times</p>
      </div>
    </div>
  );
}

export default App;
