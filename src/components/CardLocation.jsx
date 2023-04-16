import './Styles/CardLocation.css'

const CardLocation = ({ location }) => {
  return (
    <div>
    <h2>{location?.name}</h2>
    <ul>
        <li>Type: {location?.type}</li>
        <li>Dimension: {location?.dimension}</li>
        <li>Population: {location?.residents.length}</li>
    </ul>


    </div>
  )
}

export default CardLocation