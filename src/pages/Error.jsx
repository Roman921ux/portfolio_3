import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
        <span>Error</span>
        <Link to="/"><p>Come Back</p></Link>
    </div>
  )
}

export default Error