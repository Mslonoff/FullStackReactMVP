import React, { useEffect, useState } from "react";

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
    <main>
      
      {vehicles.map((vehicle) => (
        <span className="vehicle" key={vehicle.id}>
          {vehicle}
        </span>
      ))}
      {console.log('component tasks rendered')}
    </main>
  );
};

export default App;
