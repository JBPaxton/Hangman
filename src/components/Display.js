// Imports the Display.css file to style the component
import './Display.css';

// Defines the Display function component
function Display (props) {

// Converts the string passed to the component as props to an array of characters
const wordArray = props.word.split("");

// Maps over the incorrect guesses and returning a span element for each, with a comma separator after the first one
const renderIncorrect = props.incorrect.map((key, index)=>{
  return (
    <span key={key}>{index == 0 ? key : ", " + key}</span>
);
});

// Maps over the correct guesses and returning a span element for each, with a comma separator after the first one
const renderCorrect = props.correct.map((key, index)=>{
  return (
    <span key={key}>{index == 0 ? key : ", " + key}</span>
);
});

// Defines an array called "renderWord"
let renderWord = [];

// Checks if the value of the state variable 'game' is still set to 'ongoing'
if (props.gameOutcome == "ongoing") {
  // If the game is ongoing, maps over the wordArray array and returns either a blank space or the character itself, depending on whether it has been guessed correctly
  renderWord = wordArray.map((key, index)=>{
    // Checks if the character has been guessed correctly
    const isGuessed = props.correct.indexOf(key.toUpperCase());
    // If the character has not been guessed correctly, returns an underscore ("_") otherwise, returning the character itself.
    return (isGuessed == -1 ? "_": key);
  });
}
else {
  // If the value of state variable 'game' is anything other than 'ongoing' then stores the array 'wordArray' as variable 'renderWord'
  renderWord = wordArray;
}

// Renders the component
  return (
    // Creates a 'div' of class "Display"
    <div className="Display">
      {/* Creates a 'div' of class "gameInfo" */}
        <div className='gameInfo'>
          {/* Creates a 'h1' heading that contains the value of variable 'renderWord' */}
        <h1>{renderWord}</h1>
        {/* Creates a 'h2' heading containing text "Incorrect:" */}
        <h2>Incorrect:</h2>
        {/* Creates a 'h3' heading that displays the contents of variable 'renderCorrect' */}
        <h3>{renderIncorrect}</h3>
        </div>
    </div>
  );
}

// Exports the 'Display' component.
export default Display;