// src/App.js
import React, { useState } from 'react';
import './App.css'; // You can keep or remove this if you don't add custom CSS

// --- Helper Components ---

// Component to display when the user is a guest (not logged in)
function GuestGreeting() {
  // Text directly from your provided screenshot for guest view
  return <h1>Please sign up. Login</h1>;
}

// Component to display when the user is logged in
function UserGreeting() {
  // Text directly from your provided screenshot for user view
  return <h1>Welcome back Logout</h1>;
}

// Component for the Login button
function LoginButton(props) {
  return (
    <button onClick={props.onClick} style={{ padding: '10px 20px', cursor: 'pointer', margin: '10px 0' }}>
      Login
    </button>
  );
}

// Component for the Logout button
function LogoutButton(props) {
  return (
    <button onClick={props.onClick} style={{ padding: '10px 20px', cursor: 'pointer', margin: '10px 0' }}>
      Logout
    </button>
  );
}

// Component that conditionally renders the greeting based on isLoggedIn prop
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />; // Show UserGreeting if logged in
  }
  return <GuestGreeting />; // Show GuestGreeting if not logged in
}

// --- Main App Component ---
function App() {
  // State to keep track of the login status
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially, the user is not logged in

  // Event handler for Login button click
  const handleLoginClick = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true when Login is clicked
  };

  // Event handler for Logout button click
  const handleLogoutClick = () => {
    setIsLoggedIn(false); // Set isLoggedIn to false when Logout is clicked
  };

  // Conditionally render the button based on login status
  let button;
  if (isLoggedIn) {
    // If logged in, show Logout button
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    // If not logged in, show Login button
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      {/* Render the Greeting component, passing the current login status */}
      <Greeting isLoggedIn={isLoggedIn} />
      {/* Render the appropriate button (Login or Logout) below the greeting */}
      {button}
    </div>
  );
  }

export default App;