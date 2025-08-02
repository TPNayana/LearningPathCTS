// src/components/CurrencyConvertor.js
import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState(''); // Changed from 'rupees' to 'amount'
  const [currencyType, setCurrencyType] = useState(''); // New state for currency type

  const conversionRate = 0.011; // Example: 1 INR = 0.011 EUR (approximately)

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (amount && currencyType.toLowerCase() === 'euro') { // Only convert if currency is 'Euro'
      const convertedRupees = parseFloat(amount) / conversionRate; // Convert Euro to Rupees as per lab description
      alert(`Converting to Euro Amount is ${convertedRupees.toFixed(2)}`); // Alert result, as per image
    } else if (amount && currencyType.toLowerCase() === 'rupees') {
      const convertedEuro = parseFloat(amount) * conversionRate; // Convert Rupees to Euro
      alert(`Converting to Euro Amount is ${convertedEuro.toFixed(2)}`); // Alert result, as per image
    }
    else {
      alert("Please enter amount and specify 'Euro' or 'Rupees' in Currency field.");
    }
  };

  return (
    <div style={{ margin: '0', padding: '0', border: 'none', borderRadius: '0', textAlign: 'left' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '80px' }}>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{ padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '80px' }}>Currency:</label>
          <input
            type="text" // Text input for currency type
            value={currencyType}
            onChange={(e) => setCurrencyType(e.target.value)}
            placeholder="e.g., Euro or Rupees"
            style={{ padding: '5px' }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 20px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default CurrencyConvertor;