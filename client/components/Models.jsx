import React, { useState } from 'react';


const Models = ({availableModels, setAvailableModels, vehicles, makesButton}) => {
    const [modelsButton, setModelsButton] = useState(false);
    const [tacomaButton, setTacomaButton] = useState(false);
    const [tundraButton, settundraButton] = useState(false);
    const [fourRunneraButton, setFourRunnerButton] = useState(false);
    const [priusButton, setPriusButton] = useState(false);
    const handleModelClick = (model) => {
        setAvailableModels(true);
        if (model === 'Tacoma') {
            // make the 'Show Trims' button in Trims.jsx display only Tacoma Trims available from database
            setTacomaButton(true);
        } else if (model === 'Tundra') {
            // make the 'Show Trims' button in Trims.jsx display only Tundra Trims available from database
            settundraButton(true);
        } else if (model === '4Runner') {
            // make the 'Show Trims' button in Trims.jsx display only 4Runner Trims available from database
            setFourRunnerButton(true);
        } else if (model === 'Prius') {
            // make the 'Show Trims' button in Trims.jsx display only Prius Trims available from database
            setPriusButton(true);
        }
        
    }
    if (makesButton) {
        return (
    <div id="models">
        <button id="modelsButton" onClick={() => setModelsButton(true)}>Show Models</button>
            {modelsButton ? (
                <>
                {/* what if I make a separate models component for each model available? */}
            <button id="tacoma" onClick={() => handleModelClick('Tacoma')}>Tacoma</button>
            <button id="tundra"onClick={() => handleModelClick('Tundra')}>Tundra</button>
            <button id="4Runner"onClick={() => handleModelClick('4Runner')}>4Runner</button>
            <button id="Prius"onClick={() => handleModelClick('Prius')}>Prius</button>
            </>
            ) : null}
            </div>
    )}
    }

export default Models;