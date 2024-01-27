import React, { useState } from 'react';
// next we want the 'modelsButton' to only be on the page if the makes button state is true from Makes.jsx
// so we'll need to import makes.jsx I think. Let's try... No luck, so according to dev tools, makes button is undefined in this file, how do we make the '    const [makesButton, setMakesButton] = useState(false);' from Makes.jsx accessible in a separate file?
// import Makes from './Makes.jsx';
const Models = ({vehicles, makesButton}) => {
    const [modelsButton, setModelsButton] = useState(false);
    if (makesButton) {
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
    }

export default Models;