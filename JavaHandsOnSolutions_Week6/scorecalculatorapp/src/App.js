import React from 'react';
import CalculateScore from './Components/CalculateScore'; // Import CalculateScore component
import './Stylesheets/mystyle.css'; // Import your custom stylesheet

function App() {
  return (
    <div className="App">
      <h1>Score Calculator Application</h1>
      {/* Render the CalculateScore component with props */}
      <CalculateScore
        Name="John Doe"
        School="Springfield High"
        Total={85} // Make sure these are numbers, not strings
        Goal={100} // Make sure these are numbers
      />
      <CalculateScore
        Name="Jane Smith"
        School="Riverside Academy"
        Total={92}
        Goal={95}
      />
      {/* You can add more instances of CalculateScore with different data here */}
    </div>
  );
}

export default App;