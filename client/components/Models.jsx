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
                <div>
                <img className="tacomaImage" src="https://vehicle-images.dealerinspire.com/stock-images/chrome/0536f4bf3c9e392515d677f36aeba71c.png"></img>
            <button className="tacoma" onClick={() => {handleModelClick('Tacoma'); setTacomaButton(true);}}>Tacoma</button>
            </div>
            <div>
            <img className="tundraImage" src="https://vehicle-images.dealerinspire.com/stock-images/chrome/d492cd3929e52ec6175f591f81c555c4.png"></img>
            <button className="tundra"onClick={() => {handleModelClick('Tundra'); setTundraButton(true);}}>Tundra</button>
            </div>
            <div>
            <img className="fourRunner" src="https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/eeb5b84ca0559c97aa7651cc4699ef9b.png"></img>
            <button className="fourRunner"onClick={() => {handleModelClick('4Runner'); setFourRunnerButton(true);}}>4Runner</button>
            </div>
            <div>
            <img className="tacomaImage" src="https://www.buyatoyota.com/assets/img/vehicle-info/Prius/2024/prius-hero-image.png"></img>
            <button className="Prius"onClick={() => {handleModelClick('Prius'); setPriusButton(true);}}>Prius</button>
            </div>
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