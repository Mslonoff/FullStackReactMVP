import React, { useState } from 'react';

const Trims = ({setAvailableModels, tacomaTrimButton, setTacomaTrimButton, handleModelClick, tacomaButton, tundraButton, fourRunnerButton, setFourRunnerButton, priusButton, setPriusButton, availableModels, modelsButton, setModelsButton, vehicles, trimsButton, setTrimsButton}) => {


  const handleButtonClick = (trim) => {
    setTacomaTrimButton(true);
    handleTrimButtonClick(trim);
  };

  const handleTrimButtonClick = (trim) => {
    // Implement the functionality for trim button click
    console.log(`Trim button clicked: ${trim}`);
  };

  
  if (availableModels) {
    return (
<div id="trims">
  <button id="trimsButton" onClick={() => setTrimsButton(true)}>
    Show Trims
    </button>
    {trimsButton && tacomaButton ? (
  <div>
    {/* NOW HOW CAN WE MAKE THIS RETURN ONLY ONE OF EACH TRIM RATHER THAN ALL TRIMS */}
    {(() => {
      const uniqueTrims = new Set();
      return vehicles
        .filter((vehicle) => vehicle.model === 'Tacoma')
        .map((vehicle) => {
          if (!uniqueTrims.has(vehicle.trim)) {
            uniqueTrims.add(vehicle.trim);
            return (
              <button
                className="tacomaTrimButton"
                key={vehicle.id}
                onClick={() => handleButtonClick(vehicle.trim)}
              >
                {vehicle.trim}
              </button>
            );
          }
          return null; // Return null for duplicates
        });
    })()}
  </div>
) : null}
         {trimsButton && tundraButton ? (
  <div>
    {/* NOW HOW CAN WE MAKE THIS RETURN ONLY ONE OF EACH TRIM RATHER THAN ALL TRIMS */}
    {(() => {
      const uniqueTrims = new Set();
      return vehicles
        .filter((vehicle) => vehicle.model === 'Tundra')
        .map((vehicle) => {
          if (!uniqueTrims.has(vehicle.trim)) {
            uniqueTrims.add(vehicle.trim);
            return (
              <button
                className="tundraTrimButton"
                key={vehicle.id}
                onClick={() => handleButtonClick(vehicle.trim)}
              >
                {vehicle.trim}
              </button>
            );
          }
          return null; // Return null for duplicates
        });
    })()}
  </div>
) : null}
             {trimsButton && fourRunnerButton ? (
  <div>
    {/* NOW HOW CAN WE MAKE THIS RETURN ONLY ONE OF EACH TRIM RATHER THAN ALL TRIMS */}
    {(() => {
      const uniqueTrims = new Set();
      return vehicles
        .filter((vehicle) => vehicle.model === '4Runner')
        .map((vehicle) => {
          if (!uniqueTrims.has(vehicle.trim)) {
            uniqueTrims.add(vehicle.trim);
            return (
              <button
                className="fourRunnerTrimButton"
                key={vehicle.id}
                onClick={() => handleButtonClick(vehicle.trim)}
              >
                {vehicle.trim}
              </button>
            );
          }
          return null; // Return null for duplicates
        });
    })()}
  </div>
) : null}
             {trimsButton && priusButton ? (
  <div>
    {/* NOW HOW CAN WE MAKE THIS RETURN ONLY ONE OF EACH TRIM RATHER THAN ALL TRIMS */}
    {(() => {
      const uniqueTrims = new Set();
      return vehicles
        .filter((vehicle) => vehicle.model === 'Prius')
        .map((vehicle) => {
          if (!uniqueTrims.has(vehicle.trim)) {
            uniqueTrims.add(vehicle.trim);
            return (
              <button
                className="priusTrimButton"
                key={vehicle.id}
                onClick={() => handleButtonClick(vehicle.trim)}
              >
                {vehicle.trim}
              </button>
            );
          }
          return null; // Return null for duplicates
        });
    })()}
  </div>
) : null}
</div>
)}}

export default Trims;