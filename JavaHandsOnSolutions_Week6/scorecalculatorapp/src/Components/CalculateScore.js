import React from 'react';

function CalculateScore(props) {
  const average = props.Total / props.Goal * 100; // Calculate average score

  return (
    <div className="score-container">
      <h2>Student Score Details</h2>
      <p><strong>Name:</strong> {props.Name}</p>
      <p><strong>School:</strong> {props.School}</p>
      <p><strong>Total Score:</strong> {props.Total}</p>
      <p><strong>Goal:</strong> {props.Goal}</p>
      <h3>Average Score: {average.toFixed(2)}%</h3> {/* Display average, rounded to 2 decimal places */}
      <hr/>
    </div>
  );
}

export default CalculateScore;