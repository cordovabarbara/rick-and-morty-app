import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [state, setState] = useState()
    useEffect(() => {
        axios.get(url)
            .then(response => setState (response.data))
            .catch(error => console.log(error))
    }, [url])

    return state
}

export default useFetch