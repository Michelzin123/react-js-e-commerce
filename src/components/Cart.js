import React, { useState }from 'react';

import ItemCart from './ItemCart';
import "./Cart.css";

const Cart = () => {

	var [myCart, addToCart] = useState([
		{
			"id": 201,
			"name": "Call Of Duty Infinite Warfare",
			"price": 49.99,
			"score": 80,
			"image": "call-of-duty-infinite-warfare.png"
		},
	])

	const handlerAdd = (item) => {
		const newItem = [
			...myCart,
			{
				"id": item.id,
			    "name": item.name,
			    "price": item.price,
			    "score": item.score,
			    "image": item.image
			}
		];

		console.log(newItem);

		return addToCart(newItem);
	}

  return(
  	<>
  		<section className="cart">
		    <div className="cart-header">
		    	<img className="cart-logo" src="cart-icon.svg" alt=""/>
		    	<h1 className="cart-title">Meu carrinho</h1>
		    </div>
		    <div className="item-div">
		    	{myCart.map(item => <ItemCart item={item}/> )}
		    </div>
		</section>
	</>
  )
}

export default Cart;