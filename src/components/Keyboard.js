// Imports the css styles for the 'Keyboard' component
import './Keyboard.css';

// Defining a functional component named Keyboard, which takes an array 'keyArray and function 'handleClick' as props
function Keyboard (props) {

// Maps through the array 'keyArray' passed as a prop to generate a 'keyBloack' div for each key, with an
// onClick function which invokes the handleClick method passed as a prop with the value of the key as its parameter.
const renderKeys = props.keyArray.map((key, index)=>{
    return (
        <div key={key} className = "keyBlock" onClick={() => {props.handleClick(key)}}>
            <span key={key}>{key}</span>
        </div>
    );
  });

  // Renders the keyboard grid, which contains the rendered keyBlocks.
  return (
    <div className="keyboardGrid">
        {renderKeys}
    </div>
  );
}

// Exports the Keyboard component.
export default Keyboard;