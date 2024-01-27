import React, { useState } from 'react';

const Trims = ({setAvailableModels, availableModels, modelsButton, setModelsButton, vehicles, trimsButton, setTrimsButton}) => {
  // const [trimsButton, setTrimsButton] = useState(false);
  if (availableModels) {
    return (
<div id="trims">
  <button id="trimsButton" onClick={() => setTrimsButton(true)}>
    Show Trims
    </button>
    {trimsButton ? (
      <div>
        {vehicles.map((vehicle) => (
            <span className="trim" key={vehicle.id}>
              {vehicle.trim}
            </span>
          ))}
          </div>
    ) : null}
</div>
)}}

export default Trims;