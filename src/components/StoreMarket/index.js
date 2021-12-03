import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addStoreMarketAction } from '../Store/actions';

export default function StoreMarketList() {
    const storeMarketItems = useSelector(state => state.storeMarket.data);
    const dispatch = useDispatch();
    
    function addItem(){
        dispatch(addStoreMarketAction('capacete de diamante'));
    }

    return (
        <>
            <ul>
                {
                    storeMarketItems.map((item, i) => <li key={i}>{item}</li>)
                }
            </ul>
            <button type="button" onClick={addItem}>add item</button>
        </>
    )
}
