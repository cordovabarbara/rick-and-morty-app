
import './App.css'
import PrincipalContent from './components/PrincipalContent';
import useFetch from './hooks/useFetch'
import randomLocation from './utils/RandomLocation';
import { useRef, useState } from 'react';

function App() {

  const [inputValue, setinputValue] = useState(randomLocation())

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [getLocation, hasError] = useFetch(url)
  const inputLocation = useRef()
  const handleSubmit = e => {e. preventDefault()
  setinputValue(inputLocation.current.value)}
  

  return (
    <div className="app">
      <h1 className='app__title'>Rick and Morty</h1>
      <form className='app__form' onSubmit={handleSubmit}>
        <input className='app__input' ref={inputLocation} type="text"/>
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
