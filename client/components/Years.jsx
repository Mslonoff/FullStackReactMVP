const Years = ({vehicles}) => {
    // console.log('makes:', makes)
    return (
<div id="makes">
        {vehicles.map((vehicle) => (
            <span className="make" key={vehicle.id}>
              {vehicle.year}
              {console.log('vehicles in span:', {vehicles})}
            </span>
          ))})
</div>
)}

export default Years;