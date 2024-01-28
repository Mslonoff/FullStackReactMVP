import React, { useState } from "react";
import SelectedVehicle from "./SelectedVehicle.jsx";

const Makes = ({ vehicles, setMakesButton, makesButton }) => {

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
                TOYOTA
              </span>
          </div>
        ) : null}
      </div>
    );
    console.log('makesButton?', makesButton);
}
  export default Makes;
