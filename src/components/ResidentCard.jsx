import useFetch from "../hooks/useFetch"
import './Styles/ResidentCard.css'

const ResidentCard = ({url}) => {

    const [residents] = useFetch(url)

    return (
  <div className="resident">
    <header className="resident__header">
      <img className="resident__avatar" src={residents?.image} alt=""/>
        <div className="resident__status">
          <div className={`resident__circle ${residents?.status}`}></div>
            <span className="resident__label">{residents?.status}</span>
          </div>
    </header>

<div className="resident__box">
  <h3 className="resident__name">{residents?.name}</h3>
    <hr className="resident__hr" />
      <ul className="resident__list">
        <li className="list__item">
        <span className="resident__label">Specie: </span>
        <span className="resident__value">{residents?.species}</span>
        </li>

        <li className="list__item">
        <span className="resident__label">Origin: </span> 
        <span className="resident__value">{residents?.origin.name}</span>
        </li>

        <li className="list__item">
        <span className="resident__label">Episodes where appear: </span> 
        <span className="resident__value">{residents?.episode.length}</span>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default ResidentCard