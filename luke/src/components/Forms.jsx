import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Forms = () => {
const [starId, setStarId]= useState(1)
 const[category, setCategory]= useState('')
 const navigate =useNavigate()
 const handleform =(e)=>{
    e.preventDefault();
     navigate(`/${category}/${starId}`)
 }

  return (
    <div>
        <form onSubmit={handleform}>
            <label>Search for:</label>
            <select onChange={(e)=>setCategory(e.target.value)} value={category} >
                <option value='people' >people</option>
                <option value='planets' >planets</option>
            </select>
            <label>ID</label>
            <input type="text" value={starId} onChange={(e)=>setStarId(e.target.value)} />
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default Forms