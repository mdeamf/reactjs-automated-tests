import { useState } from 'react';
import '../App.css';

function ListItemsComponent() {
  const [counter, setCounter] = useState(0);
  const [listItems, setListItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const changeCounter = (value) => {
    setCounter((counter) => counter + value);
  };

  const addItem = (e) => {
    e.preventDefault();

    setListItems([
      ...listItems,
      {
        text: newItem,
        id: listItems.length,
      },
    ]);

    setNewItem('');
  };

  const removeItem = (id) => {
    const newListItems = listItems.filter((item) => item.id !== id);
    setListItems(newListItems);
  };

  const ListComponent = listItems.map((item) => {
    return (
      <li data-testid={`item${item.id}`} key={item.id}>
        {item.text}
        <button
          data-testid={`remove-item${item.id}`}
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>
      </li>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter:
          <span data-testid="counter-value"> {counter}</span>
        </p>

        <div className="counter-buttons">
          <button onClick={() => changeCounter(1)}>Increment</button>
          <button onClick={() => changeCounter(-1)} disabled={counter <= 0}>
            Decrement
          </button>
        </div>

        <div className="divider"></div>

        <form onSubmit={addItem}>
          <label htmlFor="newItem" className="items-input">
            Add New Item
            <input
              id="newItem"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
          </label>
          <input
            data-testid="add-item"
            type="submit"
            value="Add Item"
            disabled={newItem === ''}
          />
        </form>
        <ul>{ListComponent}</ul>
      </header>
    </div>
  );
}

export default ListItemsComponent;
