// src/components/ListofPlayers.js
import React from 'react';

const ListofPlayers = ({ players }) => {
  // Display all players using map()
  const allPlayers = players.map((item, index) => (
    <div key={index}>
      <li>Mr. {item.name} <span>{item.score}</span></li>
    </div>
  ));

  return (
    <div>
      <h1>List of Players</h1>
      <ul>{allPlayers}</ul>
    </div>
  );
};

export default ListofPlayers;