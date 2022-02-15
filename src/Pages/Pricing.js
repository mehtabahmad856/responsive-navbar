import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div>
        <Link>
          <ArrowBack />
        </Link>
        <h1>I am Pricing page</h1>
    </div>
  )
}

export default Pricing;