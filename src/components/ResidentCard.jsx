import useFetch from "../hooks/useFetch"
import './Styles/ResidentCard.css'

const ResidentCard = ({url}) => {

    const [residents] = useFetch(url)

    return (
  <div className="resident">
    <header className="resident__header">
      <img className="resident__avatar" src={residents?.image} alt=""/>
        <div className="resident__status">
          <div className="resident__circle"></div>
            <span className="resident__label">{residents?.status}</span>
          </div>
    </header>

    <h3 className="resident__name">{residents?.name}</h3>
    <hr className="resident__hr" />
    <ul className="resident__list">
        <li>Specie: {residents?.species} </li>
        <li>Origin: {residents?.origin.name}</li>
        <li>Episodes where appear: {residents?.episode.length}</li>
    </ul>
    </div>
  )
}

export default ResidentCard