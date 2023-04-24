import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Planet = () => {
    const [data,setData]= useState({})
    const {starId }= useParams()
    useEffect(()=>{axios.get(`https://swapi.dev/api/planets/${starId}`).then(response=>setData(response.data)).catch(error=>console.log(error))},[starId])
  return (
    <div>
     <h1>{data.name}</h1><br/>
     <p>Climate :{data.climate}</p>
     <p>Surface_water:{data.surface_water} </p>
     <p>Population :{data.population}</p>
    </div>
  )
}

export default Planet