// src/components/ListofIndianPlayers.js
import React from 'react';

const ListofIndianPlayers = ({ players }) => {
  const mergedPlayers = players.map((player, index) => (
    <li key={index}>Mr. {player}</li>
  ));

  return (
    <div>
      <h1>List of Indian Players Merged:</h1>
      <ul>{mergedPlayers}</ul>
    </div>
  );
};

export default ListofIndianPlayers;