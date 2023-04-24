import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const People = (props) => {
    const [data, setData]= useState({})
    const {starId}= useParams()
    
    useEffect(()=> {axios.get(`https://swapi.dev/api/people/${starId}`).then(response=>setData(response.data))
    .catch(error=> console.log(error))},[starId]) 
  return (
    <div>
    {data.name} <br/>
    {data.hair_color} <br/>
    {data.skin_color}<br/>
    {data.eye_color} <br/>
	{data.birt_year}<br/>
    {data.gender} <br/>
    </div>
  )
}

export default People