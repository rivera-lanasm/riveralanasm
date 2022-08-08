import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// import Navbar from "./navbar";
// import {Navbar} from 'react-bootstrap'
import BasicExample from "./navbar1"

const Header = ({ siteTitle }) => (
  <header>

    {BasicExample({siteTitle})}
    <br></br>

    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
