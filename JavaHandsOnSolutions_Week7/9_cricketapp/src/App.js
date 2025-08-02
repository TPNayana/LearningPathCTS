// src/App.js
import React from 'react';
import './App.css';
import ListofPlayers from './components/ListofPlayers';
import Scorebelow70 from './components/Scorebelow70';
// CORRECTED LINES BELOW:
import { OddPlayers } from './components/OddPlayers';
import { EvenPlayers } from './components/EvenPlayers'; // Import EvenPlayers from its own file
import ListofIndianPlayers from './components/ListofIndianPlayers';

function App() {
  // Declare the flag variable for conditional rendering
  const flag = false; // Change this to 'false' and save to see the other output

  // Player data for ListofPlayers and Scorebelow70
  const cricketPlayers = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 },
  ];

  // Example data for Odd/Even players (based on your lab image output)
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];

  // Player data for merging
  const T20players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

  // Merge the two arrays using the spread operator
  const mergedIndianPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div className="App">
      {flag ? (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers players={cricketPlayers} />
          <hr />
          <Scorebelow70 players={cricketPlayers} />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <OddPlayers team={IndianTeam} />
          <hr />
          <EvenPlayers team={IndianTeam} />
          <hr />
          <ListofIndianPlayers players={mergedIndianPlayers} />
        </div>
      )}
    </div>
  );
}

export default App;