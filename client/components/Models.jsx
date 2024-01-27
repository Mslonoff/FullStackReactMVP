import React, { useState } from 'react';

const Models = ({availableModels, setAvailableModels, tacomaButton, setTacomaButton, vehicles, makesButton}) => {
    const [modelsButton, setModelsButton] = useState(false);
    
    const [tundraButton, setTundraButton] = useState(false);
    const [fourRunneraButton, setFourRunnerButton] = useState(false);
    const [priusButton, setPriusButton] = useState(false);
    console.log('tacomaButton in Models?', tacomaButton);  // BUT IT BECOMES TRUE HERE... INTERESTING!
    const handleModelClick = (model) => {
        setAvailableModels(true);

    }
    if (makesButton) {
        return (
    <div id="models">
        <button id="modelsButton" onClick={() => setModelsButton(true)}>Show Models</button>
            {modelsButton ? (
                <>
                {/* what if I make a separate models component for each model available? */}
            <button id="tacoma" onClick={() => {handleModelClick('Tacoma'); setTacomaButton(true);}}>Tacoma</button>
            <button id="tundra"onClick={() => {handleModelClick('Tundra'); setTundraButton(true);}}>Tundra</button>
            <button id="4Runner"onClick={() => {handleModelClick('4Runner'); setFourRunnerButton(true);}}>4Runner</button>
            <button id="Prius"onClick={() => {handleModelClick('Prius'); setPriusButton(true);}}>Prius</button>
            </>
            ) : null}
            </div>
    )}
    }

export default Models;

        // if (model === 'Tacoma') {
        //     // make the 'Show Trims' button in Trims.jsx display only Tacoma Trims available from database
        // } else if (model === 'Tundra') {
        //     // make the 'Show Trims' button in Trims.jsx display only Tundra Trims available from database
        //     setundraButton(true);
        // } else if (model === '4Runner') {
        //     // make the 'Show Trims' button in Trims.jsx display only 4Runner Trims available from database
        //     setFourRunnerButton(true);
        // } else if (model === 'Prius') {
        //     // make the 'Show Trims' button in Trims.jsx display only Prius Trims available from database
        // }