import React from 'react'
import './LoadingPage.css'
import logo from "../../logo.svg";

export default function LoadingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Loading...</p>
      </header>
    </div>
  )
}
