import React, { useState } from 'react';
import SelectedVehicle from "./SelectedVehicle.jsx";

const Models = ({setAvailableModels, setSelectedModel, setTacomaButton, setFourRunnerButton, setPriusButton, setTundraButton, makesButton}) => {
    const [modelsButton, setModelsButton] = useState(false);
    const handleModelClick = (model) => {
        setAvailableModels(true);
        setSelectedModel(model);
        console.log('model:', model);

    }
    if (makesButton) {
        return (
    <div id="models">
        <button className="modelsButton" onClick={() => setModelsButton(true)}>Show Models</button>
            {modelsButton ? (
                <>
                {/* what if I make a separate models component for each model available? */}
                <img className="tacomaImage" src="https://img-new.cgtrader.com/items/4722492/4130b8ba02/large/toyota-tacoma-2024-trd-pro-3d-model-4130b8ba02.jpg"></img>
            <button className="tacoma" onClick={() => {handleModelClick('Tacoma'); setTacomaButton(true);}}>Tacoma</button>
            <button className="tundra"onClick={() => {handleModelClick('Tundra'); setTundraButton(true);}}>Tundra</button>
            <button className="fourRunner"onClick={() => {handleModelClick('4Runner'); setFourRunnerButton(true);}}>4Runner</button>
            <button className="Prius"onClick={() => {handleModelClick('Prius'); setPriusButton(true);}}>Prius</button>
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