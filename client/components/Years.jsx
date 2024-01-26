import React, { useState } from 'react';

const Years = ({vehicles}) => {
    const [yearsButton, setYearsButton] = useState(false);

    return (
<div id="years">
    <button id="yearsButton" onClick={() => setYearsButton(true)}>
        Show Years
    </button>

    {yearsButton ? (
        <div>
        {vehicles.map((vehicle) => (
            <span className="make" key={vehicle.id}>
              {vehicle.year}
            </span>
          ))}
          </div>
    ) : null}
</div>
)};

export default Years;