import React from 'react'
import {
  BrowserRouter as Router,
  Route, // for later
  Link,
} from 'react-router-dom'
import Slideshow from './Slideshow/slideshow'
import Products from "../Products/Products"
import "./home.css"

function Home ({ match }) {

    return (
      <div id="user-home-container">
       <Slideshow match={match} />
       <hr />
       <h1 className="text-center display-4">All Products</h1>
       <Products />
      </div>
    )
  }

  export default Home;