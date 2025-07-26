import './App.css'; // Keep this for basic styling
import Home from './Components/Home';     // Import Home component
import About from './Components/About';   // Import About component
import Contact from './Components/Contact'; // Import Contact component

function App() {
  return (
    <div className="App">
      {/* You can add a main heading for the portal if you wish */}
      <h1>Student Management Portal</h1>
      <hr/> {/* Horizontal line for separation */}
      <Home />      {/* Render the Home component */}
      <hr/>
      <About />     {/* Render the About component */}
      <hr/>
      <Contact />   {/* Render the Contact component */}
    </div>
  );
}

export default App;