import {useDispatch} from "react-redux";
import {deleteItem} from "../redux/store";

const DataRow = ({stockItem}) => {
    const {ticker, exchange, price, change, change_percent, dividend, last_trade_time} = stockItem

    const dispatch = useDispatch()

    function deleteStock(data) {
        dispatch(deleteItem(data))
    }

    return (
        <div className='stock'>
            <div className={`ticker ticker_${ticker}`}>
                {ticker}
            </div>
            <div className='exchange'>
                <span className='annotation'>Market</span><br/>
                {exchange}
            </div>
            <div className='price'>
                <span className='annotation'>Price</span><br/>
                <span style={{fontWeight: 'bold'}}>
                $ {price}
                </span>
            </div>
            <div>
                <span className='annotation'>Change</span><br/>
                {change}
            </div>
            <div>
                <span className='annotation'>Change in percents</span><br/>
                {change_percent}%
            </div>
            <div>
                <span className='annotation'>Dividends</span><br/>
                {dividend}
            </div>
            <div>
                <span className='annotation'>Yield</span><br/>
                {stockItem['yield']}
            </div>
            <div>
               <span className='annotation'>Trade time:</span><br/>
                {new Date(last_trade_time).toLocaleTimeString()}
            </div>
            <button className='delete-btn' onClick={() => deleteStock(ticker)}>Delete</button>
        </div>
    );
};

export default DataRow;