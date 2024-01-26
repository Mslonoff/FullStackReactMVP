const Models = ({vehicles}) => {
    // console.log('makes:', makes)
    return (
<div id="models">
        {vehicles.map((vehicle) => (
            <span className="make" key={vehicle.id}>
              {vehicle.model}
              {/* {console.log('vehicles in span:', {vehicles})} */}
            </span>
          ))})
</div>
)}

export default Models;