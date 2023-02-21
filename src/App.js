// Imports the styles for the app.
import './App.css';
// Imports the 'Game' component.
import Game from './components/Game';

// Defines the 'App' component
function App ({dictionary}) {

    // Selects a random word from the dictionary array and stores it as constant 'word'
  const word = dictionary[Math.floor(Math.random() * dictionary.length)];

  // Renders the component
  return (
    <div className="App">
      {/* Displays the Game component with the randomly selected word passed as a prop */}
      <Game word={word}/>
    </div>
  );
}

// Exports the App component.
export default App;