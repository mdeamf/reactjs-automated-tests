import './App.css';
import ListItemsComponent from './components/ListItemsComponent';
import Button from './components/ButtonComponent';

function App() {
  return (
    <div className="App">
      <p>Learn React</p>
      <ListItemsComponent />
      <Button title="Snapshot Testing" />
    </div>
  );
}

export default App;
