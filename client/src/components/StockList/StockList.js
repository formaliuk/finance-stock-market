import { StockListItem } from "../StockListItem/StockListItem";
import './StockList.css'

export const StockList = ({ quotes, hiddenItems }) => {
  return (
    <ul>
      {
        quotes.map((stockItem) =>
        hiddenItems[stockItem.ticker] ? null : (
          <li key={stockItem.ticker}>
            <StockListItem stockItem={stockItem} />
          </li>
        ))
      }
    </ul>
  );
};