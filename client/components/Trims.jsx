import React, { useState } from 'react';

const Trims = ({setAvailableModels, handleModelClick, tacomaButton, tundraButton, fourRunnerButton, priusButton, availableModels, modelsButton, setModelsButton, vehicles, trimsButton, setTrimsButton}) => {
  console.log('trimsButton?', trimsButton);
  console.log('tacomaButton', tacomaButton); // TACOMA BUTTON IS UNDEFINED!!!! WHY????
  if (availableModels) {
    return (
<div id="trims">
  <button id="trimsButton" onClick={() => setTrimsButton(true)}>
    Show Trims
    </button>
    {trimsButton && tacomaButton ? (
      <div>
        {vehicles.map((vehicle) => (
            <span className="trim" key={vehicle.id}>
              {vehicle.trim} {'Tacoma'}
              {console.log(vehicle.trim)}
              {console.log(tacomaButton)}
            </span>
          ))}
          </div>
    ) : null}
     {/* {trimsButton && tundraButton ? (
      <div>
        {vehicles.map((vehicle) => (
            <span className="trim" key={vehicle.id}>
              {vehicle.trim} {'Tundra'}
            </span>
          ))}
          </div>
    ) : null}
         {trimsButton && fourRunnerButton ? (
      <div>
        {vehicles.map((vehicle) => (
            <span className="trim" key={vehicle.id}>
              {vehicle.trim} {'4Runner'}
            </span>
          ))}
          </div>
    ) : null}
         {trimsButton && priusButton ? (
      <div>
        {vehicles.map((vehicle) => (
            <span className="trim" key={vehicle.id}>
              {vehicle.trim} {'Prius'}
            </span>
          ))}
          </div>
    ) : null} */}
</div>
)}}

export default Trims;