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
  const [tacomaButton, setTacomaButton] = useState(false);
  // const [tacomaButton, setTacomaButton] = useState(false);

  useEffect(() => {
    // console.log('use Effect for vehicles ran');
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
    {/* <Vehicles vehicles={vehicles} a={1} /> */}
    <Makes makes={vehicles.make} vehicles={vehicles} makesButton={makesButton} setMakesButton={setMakesButton}/> // THIS IS PROP DRILLING; YOU NEVER DRILL UPWARD
    <Models makes={vehicles.model} tacomaButton={tacomaButton} setTacomaButton={setTacomaButton} vehicles={vehicles} makesButton={makesButton} setMakesButton={setMakesButton} availableModels={availableModels} setAvailableModels={setAvailableModels}/>
    <Trims makes={vehicles.trim} tacomaButton={tacomaButton} setTacomaButton={setTacomaButton} vehicles={vehicles} trimsButton={trimsButton} setTrimsButton={setTrimsButton} modelsButton={modelsButton} setModelsButton={setModelsButton} setAvailableModels={setAvailableModels} availableModels={availableModels}/>
    <Colors makes={vehicles.color} vehicles={vehicles}/>
    <Years makes={vehicles.year} vehicles={vehicles}/>
      {/* {console.log('component tasks rendered')} */}
    </>
  );
};

export default App;
