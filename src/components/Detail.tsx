import React from 'react'
import useFetch from '../hooks/useFetch';

const apiUrl = 'https://api.jikan.moe/v4/anime/11061';

const Detail = () => {

    const {data, isLoading, errorMessage} = useFetch<JikanApiResponse>(apiUrl);


    
  return (
    <div>Detail</div>
  )
}

export default Detail