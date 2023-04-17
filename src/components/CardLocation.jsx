import './Styles/CardLocation.css'

const CardLocation = ({ location }) => {
  return (
    <div className='location'>
    <h2 className='location__name'>{location?.name}</h2>
    <ul className='location__list'>
      <li className='location__item'>
        <span className='location__info'>Type: </span>
        {location?.type}
      </li>

    <li className='location__item'>
      <span className='location__info'> Dimension: </span>
        {location?.dimension}
    </li>

    <li className='location__item'>
        <span  className='location__info'>Population: </span>
        {location?.residents.length}
      </li>
    </ul>
  </div>
  );
};

export default CardLocation