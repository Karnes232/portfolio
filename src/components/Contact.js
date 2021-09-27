import React from 'react'
import linkedinLogo from '../images/contact/linkedin.svg'
import emailLogo from '../images/contact/email.png'
import githubLogo from '../images/contact/github-logo.svg'

const Contact = () => {
    return (
        <div>
            <h2 className="major">Contact</h2>
          <form name='contact'  method="POST" action="/" data-netlify="true" >
          <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
          <li>
              <a
                href="hhttps://github.com/Karnes232"
                className="icon"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubLogo} alt="" className='githubLogo' />
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/james-karnes-917b813a/" className="icon" target="_blank" rel="noreferrer">
                <img src={linkedinLogo} alt="" />

              </a>
            </li>
            
            <li>
              <a href="mailto: karnes.james@gmail.com" className="icon" rel="noreferrer">
                <img src={emailLogo} alt="" />
              </a>
            </li>
          </ul>
        </div>
    )
}

export default Contact
