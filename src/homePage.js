import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg';
const HomePage = () => {
  return (
    <div className="App">
    <header>
    <nav>
        <ul>
            <li>Home</li>
            <li><Link to="/support">Support</Link></li>
        </ul>
        </nav>
    </header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default HomePage