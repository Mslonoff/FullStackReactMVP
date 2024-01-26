import React, { useState } from 'react';

const Years = ({vehicles}) => {
    const [yearsButton, setYearsButton] = useState(false);

    return (
<div id="years">
    <button id="yearsButton" onClick={() => setYearsButton(true)}>
        Show Years
    </button>

    {yearsButton ? (
        <>
        <button id="2023">2023</button>
        <button id="2024">2024</button>
        </>
    ) : null}
</div>
)};

export default Years;