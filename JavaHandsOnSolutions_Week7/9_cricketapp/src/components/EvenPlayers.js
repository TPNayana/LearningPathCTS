// src/components/EvenPlayers.js
import React from 'react';

export function EvenPlayers({ team }) {
  const [, second, , fourth, , sixth] = team; // Destructuring array for even players
  return (
    <div>
      <h1>Even Players</h1>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}