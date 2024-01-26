const Colors = ({vehicles}) => {
    const [colorsButton, setColorsButton] = useState(false);
    return (
<div id="makes">
        {vehicles.map((vehicle) => (
            <span className="make" key={vehicle.id}>
              {vehicle.color}
              {/* {console.log('vehicles in span:', {vehicles})} */}
            </span>
          ))})
</div>
)}

export default Colors;