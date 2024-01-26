import React, { useEffect, useState } from "react";

const App = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch("/api/vehicles") // changed from tasks - testing commit
      .then((res) => res.json())
      .then((vehicles) => {
        setVehicles(vehicles);
      });
  }, []);

  return (
    <main>
      {tasks.map((vehicle) => (
        <span className="vehicle" key={vehicle.id}>
          {vehicle.description}
        </span>
      ))}
    </main>
  );
};

export default App;
