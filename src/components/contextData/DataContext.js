import React, { createContext,useState,useEffect } from 'react'
import CustomFetch from '../../CustomFetch'

const dataContextCreated = createContext({})

const DataContext = ({children}) => {
    const [movies,setMovies] = useState([])
    const [search,setSearch] = useState("")
    let url =""
    if(search){
        url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
    }
    else{
    url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
    url = `https://api.themoviedb.org/3/trending/movie/day`
    }
    const {data,loading,error}= CustomFetch(url,search)

    useEffect(()=>{
        setMovies(data)
      },[search,data])

    const utili = {
        movies,
        search,
        setSearch,
        loading,
        error,
    }

  return (
    <dataContextCreated.Provider value={utili}>
      {children}
    </dataContextCreated.Provider>
  )
}

export {dataContextCreated,DataContext}