import React from 'react';
import { useInitSocketConnection } from "../../hooks/useInitSocketConnection";
import { StockMarket } from '../StockMarket/StockMarket';
import './App.css';

function App() {
  useInitSocketConnection()

  return (
    <div className="App">
      <StockMarket />
    </div>
  );
}

export default App;
