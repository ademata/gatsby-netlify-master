//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteFooterTitle }) => (
    <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
)

Footer.propTypes = {
  siteFooterTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteFooterTitle: ``,
}

export default Footer
