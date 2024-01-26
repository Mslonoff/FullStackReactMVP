// make a button element that makes the user be able to see the makes available

// const Makes = ({vehicles, onClick}) => {
//     // console.log('makes:', makes)
//     const [makesButton, setMakesButton] = useState(false);
//     return (
// <div id="makes">
//     <button id="makesButton" onClick={() => setMakesButton(true)}>Show Makes</button>
//     {makesButton ? (
//         {vehicles.map((vehicle) => (
//             <span className="make" key={vehicle.id}>
//               {vehicle.make}
//               {/* {console.log('vehicles in span:', {vehicles})} */}
//             </span>)
//           ))}) : (null)
//         }
// </div>
// )}

// export default Makes;
import React, { useState } from "react";


const Makes = ({ vehicles, onClick }) => {
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
    );
  };
  
  export default Makes;
