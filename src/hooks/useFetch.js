import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {

const [state, setState] = useState()
const [hasError, setHasError] = useState(false)


    useEffect(() => {
        axios.get(url)
            .then(response => {
            setState (response.data)
            setHasError(false)
        })
        .catch(error => {
            console.log(error)
            setHasError(true)
        })
    }, [url])

    return [state, hasError]
}

export default useFetch