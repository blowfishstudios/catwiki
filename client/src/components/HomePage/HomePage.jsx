import React, { useState, useEffect } from 'react'
import Header from './Header/Header.jsx'
import LoadingPage from '../LoadingPage/LoadingPage'

export default function Homepage() {
  const [isLoading, setIsLoading] = useState([true, true])
  const [names, setNames] = useState([])
  const [top4, setTop4] = useState([{}])

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        setNames(data.names)
        setTop4(data.top4)
      })
      .then(setTimeout(() => setIsLoading(false), 7000))
  }, [])

  return isLoading ? <LoadingPage /> : (
    <div className="HomePage">
      <Header names={names} />
    </div>
  )
}
