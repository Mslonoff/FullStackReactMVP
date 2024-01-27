import React, { useState } from "react";


const Makes = ({ vehicles, setMakesButton, makesButton }) => {
    // const [makesButton, setMakesButton] = useState(false);
    console.log('makesButton?', makesButton);
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
    console.log('makesButton?', makesButton);
}
  export default Makes;
