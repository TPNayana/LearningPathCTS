// src/components/OddPlayers.js
import React from 'react';

export function OddPlayers({ team }) {
  const [first, , third, , fifth] = team; // Destructuring array for odd players
  return (
    <div>
      <h1>Odd Players</h1>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}