import React from 'react'
import {
  BrowserRouter as Router,
  Route, // for later
  Link,
} from 'react-router-dom'
import Slideshow from './Slideshow/slideshow'
import Products from "../Products/Products"

function Home ({ match }) {

    return (
      <div>
       <Slideshow match={match} />
       <Products />
      </div>
    )
  }

  export default Home;