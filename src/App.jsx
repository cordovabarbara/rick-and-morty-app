
import './App.css'
import CardLocation from './components/CardLocation';
import ResidentCard from './components/ResidentCard';
import useFetch from './hooks/useFetch'
import randomLocation from './utils/RandomLocation';
import { useRef, useState } from 'react';

function App() {

  const [inputValue, setinputValue] = useState(randomLocation())

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const getLocation = useFetch(url)
  const inputLocation = useRef()
  const handleSubmit = e => {e. preventDefault()
  setinputValue(inputLocation.current.value)}
  

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputLocation} type="text"/>
          <button>Search</button>
      </form>
      <CardLocation location={getLocation} />
      <div>
        {
          getLocation?.residents.map(url => (
            <ResidentCard
              key={url}
              url={url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
