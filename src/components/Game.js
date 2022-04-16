import React, { useState }from 'react';

import "./Game.css"

const Game = ({game}) => {

  return(
  	<>
	    <div className="game-card">
	    	<img className="game-logo" src={game.image} alt=""/>
	    	<h1 className="game-title">{game.name}</h1>
	    	<h1 className="game-price">{`R$ ${game.price}`}</h1>
	    	<button className="button">
	    		<span className="text-button">Adicionar ao carrinho</span>
	    	</button>
	    </div>

	</>
  )
}

export default Game;