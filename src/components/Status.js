// Imports the images to display the different states of the hangman
import state0 from '../images/state0.gif'
import state1 from '../images/state1.gif'
import state2 from '../images/state2.gif'
import state3 from '../images/state3.gif'
import state4 from '../images/state4.gif'
import state5 from '../images/state5.gif'
import state6 from '../images/state6.gif'
import state7 from '../images/state7.gif'
import state8 from '../images/state8.gif'
import state9 from '../images/state9.gif'
import state10 from '../images/state10.gif'

// Defines the 'Status' component that takes the state variable "gameState" as a prop to display the appropriate image
function Status (props) {

  // Defines a finction called "displayImage" that uses a switch statement to determine which image to display based on the gameState
  function displayImage() {
    switch (props.gameState) {
      case 10:
        return(
          <img alt = "Hangman Image" src = {state10} ></img>
        )
      case 9:
        return(
          <img alt = "Hangman Image" src = {state9} ></img>
      )
      case 8:
        return(
          <img alt = "Hangman Image" src = {state8} ></img>
        )
      case 7:
        return(
          <img alt = "Hangman Image" src = {state7} ></img>
        )
      case 6:
        return(
          <img alt = "Hangman Image" src = {state6} ></img>
        )
      case 5:
        return(
          <img alt = "Hangman Image" src = {state5} ></img>
      )
      case 4:
        return(
          <img alt = "Hangman Image" src = {state4} ></img>
      )
      case 3:
        return(
          <img alt = "Hangman Image" src = {state3} ></img>
      )
      case 2:
        return(
          <img alt = "Hangman Image" src = {state2} ></img>
      )
      case 1:
        return(
          <img alt = "Hangman Image" src = {state1} ></img>
      )
      case 0:
        return(
          <img alt = "Hangman Image" src = {state0} ></img>
      )
    }
  }

  // Renders the componenet
  return (
    // Creates a 'div' element of class "Status"
    <div className="Status">
      {/* Calls the function displayImage which returns the required image element */}
      {displayImage()}
    </div>
  );
};

// Exports the 'Status' component.
export default Status;

