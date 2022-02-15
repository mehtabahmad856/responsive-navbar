import { ArrowBack } from '@material-ui/icons';
import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    
    <div>
        <Link to='/'>
          <ArrowBack />
        </Link>
        <h1>I am a Home Page</h1>
    </div>
  )
}

export default Home;