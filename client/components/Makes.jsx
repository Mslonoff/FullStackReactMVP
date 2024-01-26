const Makes = ({vehicles}) => {
    // console.log('makes:', makes)
    return (
<div id="makes">
        {vehicles.map((vehicle) => (
            <span className="make" key={vehicle.id}>
              {vehicle.make}
              {console.log('vehicles in span:', {vehicles})}
            </span>
          ))})
</div>
)}

export default Makes;
