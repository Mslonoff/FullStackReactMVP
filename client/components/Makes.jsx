import React, { useState } from "react";


const Makes = ({ vehicles }) => {
    const [makesButton, setMakesButton] = useState(false);

  
    return (
      <div id="makes">
        <button id="makesButton" onClick={() => setMakesButton(true)}>
          Show Makes
        </button>
  
        {makesButton ? (
          <div>
            {vehicles.map((vehicle) => (
              <span className="make" key={vehicle.id}>
                {vehicle.make}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    )};
  
  export default Makes;


  // now it's time to convert the show makes button so that it shows a single 'Tacoma' button that can be clicked