import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import HeaderLogo from '../../../img/logo-white.svg'
import './Header.css'

export default function Header(props) {
  const [tempNames, setTempNames] = useState([])
  const [constNames, setConstNames] = useState(['', ''])

  //Keep track of our browser history so we can redirect to search results
  const navigate = useNavigate()

 useEffect( () => {
  setTempNames(props.names)
  setConstNames(props.names)
 }, [props])

  const handleSubmit = (e) => {
    e.preventDefault()
    //Store user value in search bar
    const userInput = document.querySelector('input.search').value.toLowerCase()

    //check if user input is valid name 
    if(constNames.find(el => el.toLowerCase() === userInput)) {
      //Search for user selected breed
    navigate(`/breeds/search/${userInput}`)
    }else {
      //else redirect to 404 not found page
      navigate('/404')
    }
  }

  //Change list items as user types
  const handleChange = (e) => {
    e.preventDefault()
    const userInput = document.querySelector('input.search').value.toLowerCase()
    
    //When user begins to type generate a new list view with options that match user input
    generateNamesList(userInput)
  }

  const generateNamesList = (userInput) => {
    if(userInput === '' || !userInput) {
      setTempNames(constNames)
    }else {
      setTempNames(constNames.filter(name => name.toLowerCase().startsWith(userInput)))
    }
  }

  const handleFocus = (e) => {
    //Store the input field, the div.names-list and ul.names-list elements
    const input = document.querySelector('input.search')
    const namesDiv  = document.querySelector('div.names-list')
    const namesList = document.querySelector('ul.names-list')

    //Set timeout needed so that page will redirect if link is clicked 
    //Otherwise user clicking on breedname will not respond
    setTimeout( () => {
      if(document.activeElement === input ) {
        namesDiv.classList.remove('hidden')
        namesList.classList.remove('hidden')
        
      } else if(document.activeElement !== input ) {
        namesDiv.classList.add('hidden')
        namesList.classList.add('hidden')
      }
    }, 100)
    
  }

  return (  
    <div className="header">
      <img src={HeaderLogo} alt="" className="logo"/>
      <p className="subtitle">Get to know more about your cat breed</p>
        <form action="" className="search" onSubmit={handleSubmit}>
          <input type="text" 
          className="search" 
          onSubmit={handleSubmit} 
          onChange={handleChange} 
          placeholder="Search" 
          onFocus={handleFocus} 
          onBlur={handleFocus}/>

          <div className="names-list hidden">
            <ul className="names-list hidden">
              {tempNames.map((name, index) => 
                <Link to={`/breeds/search/${name.id}`}>
                  <li key={index}> {name.name} </li>
                </Link>
              )}
            </ul>
          </div>
        </form>
    </div>
  )
}
