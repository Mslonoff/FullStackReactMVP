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
