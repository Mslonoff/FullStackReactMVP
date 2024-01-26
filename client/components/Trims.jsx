const Trims = ({vehicles}) => {
    // console.log('makes:', makes)
    return (
<div id="trims">
        {vehicles.map((vehicle) => (
            <span className="trim" key={vehicle.id}>
              {vehicle.trim}
              {/* {console.log('vehicles in span:', {vehicles})} */}
            </span>
          ))})
</div>
)}

export default Trims;