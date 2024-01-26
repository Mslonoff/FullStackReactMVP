import React, { useState } from 'react';

const Models = ({vehicles}) => {
    const [modelsButton, setModelsButton] = useState(false);

    return (
<div id="models">
    <button id="modelsButton" onClick={() => setModelsButton(true)}>Show Models</button>
        {modelsButton ? (
            <>
        <button id="availableModels">Tacoma</button>
        <button id="availableModels">Tundra</button>
        <button id="availableModels">4Runner</button>
        <button id="availableModels">Prius</button>
        </>
        ) : null}
        </div>
)}

export default Models;