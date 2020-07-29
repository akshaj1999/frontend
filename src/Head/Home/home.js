import React from 'react'
import {
  BrowserRouter as Router,
  Route, // for later
  Link,
} from 'react-router-dom'
import Dashboard from "../Dashboard"

function Home ({ match }) {

    return (
      <div>
       {/* <Slideshow match={match} /> */}
       {/* <Dashboard />*/}
      </div> 
    )
  }

  export default Home