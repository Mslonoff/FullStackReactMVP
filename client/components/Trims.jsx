import React, { useState } from 'react';

const Trims = ({vehicles}) => {
  const [trimsButton, setTrimsButton] = useState(false);

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
)};

export default Trims;