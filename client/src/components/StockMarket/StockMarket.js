import React from 'react';
import { useSelector } from 'react-redux';
import { StockList } from "../StockList/StockList";
import { IntervalForm } from "../IntervalForm/IntervalForm";
import './StockMarket.css'

export const StockMarket = () => {
  const quotes = useSelector((state) => state.quotes);
  const hiddenItems = useSelector((state) => state.hiddenItems);

  if (!quotes.length) return null;

  return (
    <div className="wrapper">
      <h1>STOCK MARKET</h1>
      <StockList quotes={quotes} hiddenItems={hiddenItems} />
      <p>Change updating interval</p>
      <IntervalForm />
    </div>
  );
};
