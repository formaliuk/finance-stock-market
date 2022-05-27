import { useDeleteStock } from '../../hooks/useDeleteStock';
import './StockListItem.css';

export const StockListItem = ({ stockItem }) => {
  const {
    ticker, exchange, price, change, change_percent, dividend, last_trade_time,
  } = stockItem;
  const deleteStockHandler = useDeleteStock(ticker);

  return (
    <div className="stock">
      <div className={`ticker ticker_${ticker}`}>{ticker}</div>
      <div>
        <span className="annotation">Market</span>
        <br />
        {exchange}
      </div>
      <div>
        <span className="annotation">Price</span>
        <br />
        <span className="price">
          $
          {price}
        </span>
      </div>
      <div>
        <span className="annotation">Change</span>
        <br />
        {change}
      </div>
      <div>
        <span className="annotation">Change in percents</span>
        <br />
        {change_percent}
        %
      </div>
      <div>
        <span className="annotation">Dividends</span>
        <br />
        {dividend}
      </div>
      <div>
        <span className="annotation">Yield</span>
        <br />
        {stockItem.yield}
      </div>
      <div>
        <span className="annotation">Trade time:</span>
        <br />
        {new Date(last_trade_time).toLocaleTimeString()}
      </div>
      <button className="delete-btn" onClick={deleteStockHandler} type="button">
        Delete
      </button>
    </div>
  );
};
