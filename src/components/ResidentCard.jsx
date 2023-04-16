import useFetch from "../hooks/useFetch"

const ResidentCard = ({url}) => {

    const [residents] = useFetch(url)

    return (
    <div>
    <img src={residents?.image} alt=""/>
    <p>{residents?.status}</p>
    <h3>{residents?.name}</h3>
    <hr />
    <ul>
        <li>Specie: {residents?.species} </li>
        <li>Origin: {residents?.origin.name}</li>
        <li>Episodes where appear: {residents?.episode.length}</li>
    </ul>
    </div>
  )
}

export default ResidentCard