import React, { useState } from 'react';

const Colors = ({vehicles}) => {
    const [colorsButton, setColorsButton] = useState(false);

    return (
<div id="colors">
    <button id="colorsButton" onClick={() => setColorsButton(true)}>
        Show Colors</button>
    {colorsButton ? (
        <div>
          {vehicles.map((vehicle) => (
            <span className="color" key={vehicle.id}>
              {vehicle.color}
            </span>
          ))}
          </div>
    ) : null}
</div>
)};

export default Colors;