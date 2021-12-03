import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function StoreCart() {
    const cartItems = useSelector(state => state.storeMarket.data);
    const dispatch = useDispatch();
    return (
        <div>
            <ul>
                {
                    cartItems.map((item, i) => <li key={i}>{item}</li>)
                }
            </ul>
        </div>
    )
}
