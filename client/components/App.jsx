import React, { useEffect, useState } from "react";
// import Vehicles from './Vehicles.jsx';
import Makes from './Makes.jsx';
import Models from './Models.jsx';
import Trims from './Trims.jsx';
import Colors from './Colors.jsx';
import Years from './Years.jsx';
import AddVehicle from './AddVehicle.jsx';

const App = () => {
  const [userGarage, setUserGarage] = useState([]);
  const [addVehicleButton, setAddVehicleButton] = useState(false);
  const [yearButton, setYearButton] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [makesButton, setMakesButton] = useState(false);
  const [trimsButton, setTrimsButton] = useState(false);
  const [modelsButton, setModelsButton] = useState(false);
  const [availableModels, setAvailableModels] = useState(false);
  const [tacomaButton, setTacomaButton] = useState(false);
  const [tundraButton, setTundraButton] = useState(false);
  const [fourRunnerButton, setFourRunnerButton] = useState(false);
  const [priusButton, setPriusButton] = useState(false);
  const [colorsButton, setColorsButton] = useState(false);
  const [yearsButton, setYearsButton] = useState(false);
  const [specificTrimButton, setSpecificTrimButton] = useState(false);
  const [colorButton, setColorButton] = useState(false);

  useEffect(() => {
    console.log('use Effect for userGarage ran');
    fetch("/api/usergarage") // changed from tasks - testing commit
      .then((res) => res.json())
      .then((vehicles) => {
        setUserGarage(userGarage);
      });
  }, []); 


  useEffect(() => {
    console.log('use Effect for vehicles ran');
    fetch("/api/vehicles") // changed from tasks - testing commit
      .then((res) => res.json())
      .then((vehicles) => {
        setVehicles(vehicles);
      });
  }, []); 

// YOU CAN PASS STATE DOWN BUT NOT UP OR SIDEWAYS. 

  // useEffect(function, dependency array)

  return (
    <>
    {/* THIS IS PROP DRILLING; YOU NEVER DRILL UPWARD */}
    {/* <Vehicles vehicles={vehicles} a={1} /> */}
    <Makes makes={vehicles.make} vehicles={vehicles} makesButton={makesButton} setMakesButton={setMakesButton}/>  
    <Models makes={vehicles.model} priusButton={priusButton} setPriusButton={setPriusButton} fourRunnerButton={fourRunnerButton} setFourRunnerButton={setFourRunnerButton} tundraButton={tundraButton} setTundraButton={setTundraButton} tacomaButton={tacomaButton} setTacomaButton={setTacomaButton} vehicles={vehicles} makesButton={makesButton} setMakesButton={setMakesButton} availableModels={availableModels} setAvailableModels={setAvailableModels}/>
    <Trims specificTrimButton={specificTrimButton} setSpecificTrimButton={setSpecificTrimButton} makes={vehicles.trim} priusButton={priusButton} setPriusButton={setPriusButton} tundraButton={tundraButton} setTundraButton={setTundraButton} fourRunnerButton={fourRunnerButton} setFourRunnerButton={setFourRunnerButton} tacomaButton={tacomaButton} setTacomaButton={setTacomaButton} vehicles={vehicles} trimsButton={trimsButton} setTrimsButton={setTrimsButton} modelsButton={modelsButton} setModelsButton={setModelsButton} setAvailableModels={setAvailableModels} availableModels={availableModels}/>
    <Colors colorButton={colorButton} setColorButton={setColorButton} specificTrimButton={specificTrimButton} makes={vehicles.color} vehicles={vehicles} trimsButton={trimsButton} setTrimsButton={setTrimsButton} colorsButton={colorsButton} setColorsButton={setColorsButton} yearsButton={yearsButton} setYearsButton={setYearsButton}/>
    <Years yearButton={yearButton} setYearButton={setYearButton} colorButton={colorButton} yearsButton={yearsButton} setYearsButton={setYearsButton} makes={vehicles.year} vehicles={vehicles} colorsButton={colorsButton} setColorsButton={setColorsButton}/>
    <AddVehicle  addVehicleButton={addVehicleButton} setAddVehicleButton={setAddVehicleButton} yearButton={yearButton}/>
      {/* {console.log('component tasks rendered')} */}
    </>
  );
};

export default App;
