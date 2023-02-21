// Imports 'React' from the 'react' package, 
import React from 'react';
// Imports the 'Display' component.
import Display from './Display';
// Imports the 'Status' component.
import Status from './Status';
// Imports the 'Keyboard' component.
import Keyboard from './Keyboard';
// Imports the Display.css file to style the component
import './Game.css';

// Defines the component
class Game extends React.Component {

    // Define a constructor for the Game component 
    constructor(props) {
        // Calls the constructor of the parent class (React.Component) with the props passed to the current constructor.
        super(props)

        // Sets the initial state of the component
        this.state = {
            // Sets the 'word' property in state to the value passed as a prop to the component
            word: props.word,
            // Sets the 'gameState' property in state to 10
            gameState: 10,
            // Sets the 'gameOutcome' property in state to "ongoing"
            gameOutcome: "ongoing",
            // Sets the 'keyArray' property in state to an array of capital letters A to Z
            keyArray: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            // Sets the 'incorrect' property in state to an empty array
            incorrect: [],
            // Sets the 'correct' property in state to an empty array
            correct:[]
        }
        // Binds the 'handleClick' method to the Game component instance, to ensure that it always refers to 'this' correctly.
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {

        // Checks if game is still ongoing
        if (this.state.gameOutcome == "ongoing") { 

            // Converts the word to uppercase and splits it into an array
            const wordArray = this.state.word.toUpperCase().split("");

            // Checks if if the clicked letter is not in the word
            if (wordArray.indexOf(e) == -1) {
                // Pushes the clicked letter into the 'incorrect' array and removes it from the 'keyArray'
                this.state.incorrect.push(this.state.keyArray.splice(this.state.keyArray.indexOf(e), 1)[0]);
                 // Decreases the gameState by 1
                if (this.state.gameState > 1) {
                    this.setState({
                        gameState: this.state.gameState - 1
                    })
                };
                 // If the gameState is 1, then Decreases the gameState by 1 and sets the gameOutcome to "lost"
                if ((this.state.gameState === 1))
                this.setState({
                    gameState: this.state.gameState - 1,
                    gameOutcome: "lost"
                })
            }
            else {
                // If the clicked letter is in the word, push it into the correct array and remove it from the keyArray
                this.state.correct.push(this.state.keyArray.splice(this.state.keyArray.indexOf(e), 1)[0]);
                // Sets the gameOutcome to "ongoing" to trigger a re-render
                this.setState({
                    gameOutcome: "ongoing"
                })
            };

            // Renders the word with underscores for unguessed letters and the actual letter for guessed letters
            const renderWord = wordArray.map((key, index)=>{

                // Check if the letter has been guessed (and is in the correct array)
                const isGuessed = this.state.correct.indexOf(key.toUpperCase()) 
                return (isGuessed == -1 ? "_": key);
            });

            // If there are no underscores in the renderWord array, set the gameOutcome to "won"
            if (renderWord.indexOf("_") == -1) {
                this.setState({
                    gameOutcome: "won"
                })
            };
        };
    };
    
    render() {
        // Retrieves the game outcome from the state.
        const gameOutcome = this.state.gameOutcome
            // Define a function to determine what should be displayed based on the game outcome.

        function displayOutcome () {
            switch (gameOutcome) {

                // If the player has won the game, displays a message and a button to reset the game.
                case "won":
                    return (
                    <div className='resetContainer'>
                    <h1>You Won!</h1>
                    <div className = "resetButton" onClick={()=>{window.location.reload()}}>
                    <span>Try Again?</span>
                    </div>
                    </div>
                    );
                // If the player has lost the game, display a message and a button to reset the game.
                case "lost":
                    return (
                        <form className='resetContainer'>
                        <h1>You Lost..</h1>
                        <div className = "resetButton" onClick={()=>{window.location.reload()}}>
                        <span>Try Again?</span>
                        </div>
                        </form>
                    );
                // If the game is still ongoing, do nothing.
                case "ongoing":
                break;
            };
        };

        return (
            <div>
                {/* Displays the title "Hangman" and show an alert with the word when clicked */}
                <h2 onClick={()=>{alert("Word: " + this.state.word)}}>Hangman</h2>
                {/* Displays the outcome of the game when completed using the `displayOutcome` function */}
                {displayOutcome()}
                {/* Displays the current game state image using the `Status` component */}
                <Status gameState={this.state.gameState}/>
                {/* Display the game area, consisting of the word display, keyboard, and help button */}
                <div className="displayContainer">
                {/* Displays the word display using the 'Display' component, with the state properties 'word', 'gameState', 'gameOutcome', 
                'correct' and 'incorrect' passed as props */}
                <Display word={this.state.word} gameState={this.state.gameState} gameOutcome={this.state.gameOutcome} correct={this.state.correct} incorrect={this.state.incorrect}/>

                {/* Display the keyboard using the `Keyboard` component with the `handleClick` function passed as a prop to the to handle the key click events */}
                <Keyboard keyArray={this.state.keyArray} handleClick={this.handleClick}/>

                {/* Display the help button, which displays an explanatory message informing the user about the rules of the game */}
                <div className="helpContainer">
                <div className = "helpButton" onClick={()=>{alert(`Hangman is a classic word game in which a word is presented as a row of dashes, each dash representing a letter.\n 
The player must guess the word, letter by letter. If they get a letter correct, all the occurrences of that letter in the word are placed instead of the respective dashes. However, if a wrong guess is made, an extra component is added to a drawing of a person being hanged.\n
As soon as the final addition is made to the drawing, i.e. after 10 wrong guesses, then the player guessing loses.\n
The Letters are removed after the player clicks a letter, so that the player cannot choose the same letter twice.`)}}>
                    <span>Help</span>
                </div>
                </div>
                </div>
            </div>
        );
    };
};

// Exports the 'Game' component
export default Game;