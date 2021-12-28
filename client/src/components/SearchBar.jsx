import React from 'react';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import { getNameDogs } from '../actions';
import '../styles/SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameDogs(name))
    }
    

return(
    <div className='sb'>
        <input className='searchy'
        type= 'text'
        placeholder = "Search..."
        onChange = {(e) => handleInputChange(e)}
        />
        <button className='searchbar' type ='submit' onClick={(e) => handleSubmit(e)}>Buscar</button>
    </div>
)

}