import React from 'react';
import Posts from './Posts'; // Import the Posts component

function App() {
  return (
    <div className="App">
      <h1>My Awesome Blog Posts</h1>
      <Posts /> {/* Render the Posts component */}
    </div>
  );
}

export default App;