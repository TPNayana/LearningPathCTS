// src/App.js
import React, { useState } from 'react';
import './App.css'; // Keep or remove based on your styling needs
import CurrencyConvertor from './components/CurrencyConvertor'; // Import the CurrencyConvertor component

function App() {
  const [counter, setCounter] = useState(0); // State to track counter value

  // 1. Increment and Decrement functions for the counter
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
    alert(`Current counter value: ${counter + 1}`); // Show current value in alert after increment
  };

  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1);
    alert(`Current counter value: ${counter - 1}`); // Show current value in alert after decrement
  };

  // Say Hello followed by a static message (part of multiple methods)
  const sayHello = () => {
    alert("Hello! Member1"); // As per image
  };

  // The "Increment" button should invoke multiple methods.
  const handleIncrementMultiple = () => {
    increment(); // Invokes increment method (which now also alerts)
    sayHello();  // Invokes sayHello method (which alerts)
  };

  // 2. Create a button "Say Welcome" which invokes the function which takes "welcome" as an argument.
  const sayWelcome = (greeting) => {
    alert(greeting); // Show the argument in an alert
  };

  // 3. Create a button which invokes synthetic event "OnPress" which display "I was clicked"
  // Note: React uses 'onClick' for click events, which is a synthetic event.
  const handleSyntheticClick = (event) => {
    console.log("Synthetic Event Object:", event); // Still log for inspection
    alert("I was clicked"); // As per image
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Top-left counter value - matching image layout, displaying current state after increment/decrement */}
      <h1 style={{ marginBottom: '20px' }}>{counter}</h1>

      {/* Buttons Section - Grouped together as per image */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <button onClick={handleIncrementMultiple} style={{ padding: '8px 15px', cursor: 'pointer' }}>
          Increment
        </button>
        <button onClick={decrement} style={{ padding: '8px 15px', cursor: 'pointer' }}>
          Decrement
        </button>
        <button onClick={() => sayWelcome("welcome")} style={{ padding: '8px 15px', cursor: 'pointer' }}> {/* Pass "welcome" as argument */}
          Say welcome
        </button>
        <button onClick={handleSyntheticClick} style={{ padding: '8px 15px', cursor: 'pointer' }}>
          Click on me
        </button>
      </div>

      {/* Currency Converter Component */}
      <h1 style={{ marginTop: '40px', color: 'green' }}>Currency Convertor!!!</h1>
      <CurrencyConvertor />
    </div>
  );
}

export default App;