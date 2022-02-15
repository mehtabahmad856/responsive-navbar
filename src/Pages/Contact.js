import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
          <Link to='/'>
            <ArrowBack />
          </Link>
        <h1>I am Contact Page</h1>
    </div>
  )
}

export default Contact;