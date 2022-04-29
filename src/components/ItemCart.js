import React, { useState }from 'react';

import "./ItemCart.css"

const ItemCart = ({item}) => {

  return(
  	<>
	    <div className="item-card">
	    	<img className="game-logo" src={item.image} alt=""/>
	    	<h1 className="game-title">{item.name}</h1>
	    	<h1 className="game-price">{`R$ ${item.price}`}</h1>
	    	<div className="div-qtd">
	    		<button className="button-del">
		    		<span className="text-button">-</span>
		    	</button>
		    	<h1 className="item-qtd">{`${item.qtd}`}</h1>
		    	<button className="button-add">
		    		<span className="text-button">+</span>
		    	</button>
	    	</div>
	    </div>

	</>
  )
}

export default ItemCart;