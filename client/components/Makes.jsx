import React, { useState } from "react";


const Makes = ({ vehicles }) => {
    const [makesButton, setMakesButton] = useState(false);
  
    return (
      <div id="makes">
        <button id="makesButton" onClick={() => setMakesButton(true)}>
          Show Makes
        </button>
  
        {makesButton ? (
          <button id="toyota">Toyota</button>
            ) : null}
      </div>
    )};
  
  export default Makes;


  // now it's time to convert the show makes button so that it shows a single 'Tacoma' button that can be clicked