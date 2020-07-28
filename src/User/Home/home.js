import React from 'react'
import {
  BrowserRouter as Router,
  Route, // for later
  Link,
} from 'react-router-dom'
import Slideshow from './Slideshow/slideshow'

function Home ({ match }) {

    return (
      <div>
       <Slideshow match={match} />
      </div>
    )
  }

  export default Home