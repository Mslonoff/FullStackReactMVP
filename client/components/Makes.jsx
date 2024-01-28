import React, { useState } from "react";
import SelectedVehicle from "./SelectedVehicle.jsx";

const Makes = ({ vehicles, setMakesButton, makesButton }) => {
    // const [makesButton, setMakesButton] = useState(false);

    return (
      <div id="makes">
        <button className="makesButton"
        onClick={() => {setMakesButton(true);
        }}>
          Show Available Vehicle Makes
        </button>
  
        {makesButton ? (
          <div>
            {/* {vehicles.map((vehicle) => ( */}
              <span className="make" key={vehicles.id}>
                Toyota
              </span>
          </div>
        ) : null}
      </div>
    );
    console.log('makesButton?', makesButton);
}
  export default Makes;
