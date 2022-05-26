import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StockCard from './StockCard';
import { socket } from './App';

const WatchList = () => {
  const [number, setNumber] = useState('');

  const quotes = useSelector((state) => state.quotes);
  const hiddenItems = useSelector((state) => state.hiddenItems);

  if (!quotes.length) return null;

  function changeInterval() {
    if (number === '') {
      alert('Input cannot be empty');
    } else {
      socket.emit('change interval', number);
      setNumber('');
    }
  }

  function setValue(e) {
    const re = /^[0-9]+$/;
    if (!re.test(e.target.value)) {
      alert('Please enter the positive value');
    } else {
      setNumber(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="wrapper">
      <h1>STOCK MARKET</h1>
      <ul>
        {quotes.map((stockItem) =>
          hiddenItems[stockItem.ticker] ? null : (
            <li key={stockItem.ticker}>
              <StockCard stockItem={stockItem} />
            </li>
          )
        )}
      </ul>
      <p>Change updating interval</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e)}
          type="text"
          placeholder="Enter seconds"
          value={number}
        />
        <button onClick={changeInterval} className="submit-btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default WatchList;
