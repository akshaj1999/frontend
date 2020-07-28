import React from 'react'
import {
  BrowserRouter as Router,
  Route, // for later
  Link,
} from 'react-router-dom'
import User from '../User/User';
import Seller from '../Seller/seller';
import Head from '../Head/head';
import Subordinate from '../Subordinate/subordinate';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/user'></Link>
          <Link to='/seller'></Link>
          <Link to='/head'></Link>
          <Link to='/subordinate'></Link>
          <Route path='/user' component={User} />
          <Route path='/seller' component={Seller} />
          <Route path='/head' component={Head} />
          <Route path='/subordinate' component={Subordinate} />
        </div>
      </Router>
    )
  }
}

export default App