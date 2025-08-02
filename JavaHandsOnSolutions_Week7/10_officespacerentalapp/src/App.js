// src/App.js
import React from 'react';
import './App.css'; // You can keep this or remove if you don't use it for styling
import officeSpaceImage from './office-space.png'; // Import your image

function App() {
  // Create an element to display the heading of the page 
  const headingElement = <h1>Office Space , at Affordable Range</h1>;

  // Attribute to display the image of the office space 
  // Make sure to place an image file (e.g., office-space.jpg) inside your 'src' folder
  const imageAttribute = (
    <img src={officeSpaceImage} width="25%" height="25%" alt="Office Space" />
  );

  // Create an object of office to display the details like Name, Rent and Address. 
  const singleOffice = {
    Name: 'DBS',
    Rent: 50000,
    Address: 'Chennai'
  };

  // Create a list of Object and loop through the office space item to display more data. 
  const officeSpaces = [
    { Name: 'Tech Hub', Rent: 75000, Address: 'Bangalore' },
    { Name: 'Creative Zone', Rent: 45000, Address: 'Hyderabad' },
    { Name: 'Innovation Park', Rent: 90000, Address: 'Mumbai' },
    { Name: 'Flexi Space', Rent: 58000, Address: 'Pune' }
  ];

  // Function to apply CSS based on Rent 
  const getRentStyle = (rent) => {
    return {
      color: rent <= 60000 ? 'red' : 'green' // Inline CSS based on condition 
    };
  };

  return (
    <div className="App" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {headingElement}
      {imageAttribute}

      <hr /> {/* Separator */}

      {/* Display single office details */}
      <h2>Single Office Space Details:</h2>
      <h3>Name: {singleOffice.Name}</h3>
      <h3 style={getRentStyle(singleOffice.Rent)}>Rent: Rs. {singleOffice.Rent}</h3>
      <h3>Address: {singleOffice.Address}</h3>

      <hr /> {/* Separator */}

      {/* Display list of office spaces */}
      <h2>More Office Spaces:</h2>
      {officeSpaces.map((office, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px auto', padding: '10px', width: '80%' }}>
          <h3>Name: {office.Name}</h3>
          <h3 style={getRentStyle(office.Rent)}>Rent: Rs. {office.Rent}</h3>
          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;