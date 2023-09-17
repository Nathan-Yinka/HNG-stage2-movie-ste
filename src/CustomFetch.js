import { useEffect, useState } from 'react'

const CustomFetch = (url,reload,) => {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        
        
    const fetchMovie = () => {
            const apiKey = process.env.REACT_APP_API_KEY;
            setLoading(true)
            setError(null)
            const options = {
                method: 'GET',
                headers: {
                accept: 'application/json',
                Authorization: apiKey
                }
            };
            
            fetch(url, options)
            .then(response => response.json())
            .then(response => {
                if (response){
                    const first10Movies = response.results || response  // Get the first 10 data
                setData(first10Movies);
                setLoading(false)
                setError(null)
                }
                else{throw Error("No Movies at the moment")}
            })
            .catch(err => {
                setLoading([])
                setError(err.message)
                setLoading(false)
            });
        
    }
    useEffect(()=>{
        fetchMovie(url)
    },[reload,url])

    return({data,loading,error})
}

export default CustomFetch