// src/components/Scorebelow70.js
import React from 'react';

const Scorebelow70 = ({ players }) => {
  // Filter players with scores below 70 using arrow functions
  const playersBelow70 = players.filter(item => item.score < 70);

  const filteredPlayersList = playersBelow70.map((item, index) => (
    <div key={index}>
      <li>Mr. {item.name} <span>{item.score}</span></li>
    </div>
  ));

  return (
    <div>
      <h1>List of Players having Scores Less than 70</h1>
      <ul>{filteredPlayersList}</ul>
    </div>
  );
};

export default Scorebelow70;