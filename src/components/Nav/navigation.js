import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react'

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Jobs',
    path: '/jobs'
  },
  {
    title: 'Food',
    path: '/food'
  },
  {
    title: 'Housing',
    path: '/housing'
  },
  {
    title: 'Buy/Sell',
    path: '/buynsell'
  },
  {
    title: 'Movies',
    path: '/movies'
  },
  {
    title: 'Money Exchange Rate',
    path: '/exchangerate'
  },
  {
    title: 'Balikbayan Box',
    path: '/balikbayanbox'
  },
]

const Navigation = () => (
        <nav className="site-navigation">
          <ul>
            { navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}           
          </ul>
        </nav>
)

export default Navigation

