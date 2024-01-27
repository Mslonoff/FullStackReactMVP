import React, { useState } from "react";


const Makes = ({ vehicles, setMakesButton, makesButton }) => {
    // const [makesButton, setMakesButton] = useState(false);

    return (
      <div id="makes">
        <button id="makesButton"
        onClick={() => {setMakesButton(true);
        }}>
          Show Available Vehicle Makes
        </button>
  
        {makesButton ? (
          <div>
            {/* {vehicles.map((vehicle) => ( */}
              <span className="make" key={vehicles.id}>
                Tacoma
              </span>
          </div>
        ) : null}
      </div>
    );
}
  export default Makes;
