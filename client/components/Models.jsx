import React, { useState } from 'react';

const Models = ({vehicles}) => {
    const [modelsButton, setModelsButton] = useState(false);

    return (
<div id="models">
    <button id="modelsButton" onClick={() => setModelsButton(true)}>Show Models</button>
        {modelsButton ? (
            <div>
              {vehicles.map((vehicle) => (
            <span className="model" key={vehicle.id}>
              {vehicle.model}
              {/* {console.log('vehicles in span:', {vehicles})} */}
            </span>
          ))}
          </div>
        ) : null}
</div>
)}

export default Models;