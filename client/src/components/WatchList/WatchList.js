import React from 'react';
import StockCard from "../StockCard/StockCard";
import {useSelector} from "react-redux";

const WatchList = () => {

    const quotes = useSelector(state => state.quotes)
    const hiddenItems = useSelector(state => state.hiddenItems)

    if (!quotes.length) return null;

    console.log(quotes)
    console.log(hiddenItems)

    let prop

    function isHidden() {
        for (prop in hiddenItems) {
            console.log(prop)
        }
    }

    isHidden()

    return (
        <div className='wrapper'>
            <h1>
                Stock list
            </h1>
            <ul>
                {
                    quotes.map((stockItem) => (
                            <li key={stockItem.ticker}>
                                <StockCard stockItem={stockItem}/>
                            </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default WatchList;