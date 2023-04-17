
import './App.css'
import PrincipalContent from './components/PrincipalContent';
import useFetch from './hooks/useFetch'
import randomLocation from './utils/RandomLocation';
import { useRef, useState } from 'react';
import image3 from '/public/image3.webp'

function App() {

  const [inputValue, setinputValue] = useState(randomLocation())

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [getLocation, hasError] = useFetch(url)
  const inputLocation = useRef()
  const handleSubmit = e => {e. preventDefault()
  setinputValue(inputLocation.current.value)}
  

  return (
    <div className="app">
    <img className='img__app' src={image3} alt='Rick and Morty'/>
      <form className='app__form' onSubmit={handleSubmit}>
        <input className='app__input' ref={inputLocation} type="text" placeholder='Enter a number from 1 to 126'/>
          <button className='app__btn'>Search</button>
      </form>
      {
        hasError
        ? <h2 className='app__error'>⚠️Hey! you must provide an id from 1 to 126😣</h2>
        : <PrincipalContent getLocation={getLocation}/>
      }
      
    </div>
  )
}

export default App
