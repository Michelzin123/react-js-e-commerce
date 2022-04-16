import React, { useState }from 'react';
import Game from "./Game";
import Cart from "./Cart";
import "./Games.css";

const Games = ({games}) => {
	console.log(games[1]);
  return(
    <>
    	<header className="header">
    		<h1 className="header-title">Bem vindo(a) à nossa loja de jogos!</h1>
    		<h1 className="header-subtitle">Aqui você encontra os melhores títulos para zerar em sua jogatina</h1>
    	</header>
    	<Cart />
    	<section className="games-div">
    		{games.map(game => <Game game={game}/> )}
    	</section>
    </>
  )
}

export default Games;