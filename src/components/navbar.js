import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {

  return (
//     <div className="header_logo">
//       <h1>
//         <Link to="/">{siteTitle}</Link>
//       </h1>
//     </div>    
    <nav>
      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/cv"> CV</Link>
        <Link to="/posts"> Posts</Link>                
      </div>

    </nav>
  )

}

