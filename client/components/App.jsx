import React, { useEffect, useState } from "react";
// import Vehicles from './Vehicles.jsx';
import Makes from './Makes.jsx';
import Models from './Models.jsx';
import Trims from './Trims.jsx';
import Colors from './Colors.jsx';
import Years from './Years.jsx';



const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [makesButton, setMakesButton] = useState(false);
  const [trimsButton, setTrimsButton] = useState(false);
  const [modelsButton, setModelsButton] = useState(false);
  const [availableModels, setAvailableModels] = useState(false);

  useEffect(() => {
    console.log('use Effect for vehicles ran');
    fetch("/api/vehicles") // changed from tasks - testing commit
      .then((res) => res.json())
      .then((vehicles) => {
        setVehicles(vehicles);
      });
  }, []); 


  // useEffect(function, dependency array)

  return (
    <>
    {/* <Vehicles vehicles={vehicles} a={1} /> */}
    <Makes makes={vehicles.make} vehicles={vehicles} makesButton={makesButton} setMakesButton={setMakesButton}/>
    <Models makes={vehicles.model} vehicles={vehicles} makesButton={makesButton} setMakesButton={setMakesButton} availableModels={availableModels} setAvailableModels={setAvailableModels}/>
    <Trims makes={vehicles.trim} vehicles={vehicles} trimsButton={trimsButton} setTrimsButton={setTrimsButton} modelsButton={modelsButton} setModelsButton={setModelsButton} setAvailableModels={setAvailableModels} availableModels={availableModels}/>
    <Colors makes={vehicles.color} vehicles={vehicles}/>
    <Years makes={vehicles.year} vehicles={vehicles}/>
      {console.log('component tasks rendered')}
    </>
  );
};

export default App;
