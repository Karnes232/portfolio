import PropTypes from 'prop-types'
import React from 'react'
import codingIcon from '../images/laptop-code-solid.svg'


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon">
        <img src={codingIcon} alt="" />
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>James Karnes</h1>
        <p>
          I'm an independent Web developer originally from Manitoba, Canada, but now residing on the beaches of the Dominican Republic.
        </p>
      </div>
    </div>
    <nav>
      <ul>
      <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('skills')
            }}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
