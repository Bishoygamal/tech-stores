import React from 'react'
import Title from './../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

export default function Cart() {
    return (
        <section className="py-5">
            {/* title */}
            <div className="container">
                <Title title="your cart items" center/>
            </div>
            {/* cart Columns */}
            <CartColumns />
            {/* cart List */}
            <CartList />
            {/* cart Items */}
            <CartTotal />
        </section>
    )
}
