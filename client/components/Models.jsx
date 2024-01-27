import React, { useState } from 'react';


const Models = ({availableModels, setAvailableModels, vehicles, makesButton}) => {
    const [modelsButton, setModelsButton] = useState(false);
    if (makesButton) {
        return (
    <div id="models">
        <button id="modelsButton" onClick={() => setModelsButton(true)}>Show Models</button>
            {modelsButton ? (
                <>
                {/* what if I make a separate models component for each model available? */}
            <button id="tacoma" onClick={() => setAvailableModels(true)}>Tacoma</button>
            <button id="tundra"onClick={() => setAvailableModels(true)}>Tundra</button>
            <button id="4Runner"onClick={() => setAvailableModels(true)}>4Runner</button>
            <button id="Prius"onClick={() => setAvailableModels(true)}>Prius</button>
            </>
            ) : null}
            </div>
    )}
    }

export default Models;