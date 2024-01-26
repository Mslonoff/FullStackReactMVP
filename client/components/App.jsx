import React, { useEffect, useState } from "react";
// import Vehicles from './Vehicles.jsx';
import Makes from './Makes.jsx';
import Models from './Models.jsx';
import Colors from './Colors.jsx';
import Years from './Years.jsx';
import Trims from './Trims.jsx';


const App = () => {
  const [vehicles, setVehicles] = useState([]);


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
    <Makes vehicles={vehicles}/>
      {console.log('component tasks rendered')}
      <Models vehicles={vehicles}/>
      <Colors vehicles={vehicles}/>
      <Years vehicles={vehicles}/>
      <Trims vehicles={vehicles}/>
    </>
  );
};

export default App;
