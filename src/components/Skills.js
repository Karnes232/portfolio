import React from 'react'
import htmlPhoto from '../images/skills/html.png';
import cssPhoto from '../images/skills/css.png'
import javaScriptPhoto from '../images/skills/javascript.png'
import sassPhoto from '../images/skills/sass.png'
import reactPhoto from  '../images/skills/react.png'
import gatsbyPhoto from '../images/skills/gatsby.png'
import expressPhoto from  '../images/skills/express.png'
import nodePhoto from '../images/skills/nodeJS.png'
import mongoDbPhoto from '../images/skills/mongodb.png'
import restAPIphoto from '../images/skills/rest_api.png'
import pythonPhoto from '../images/skills/python.png'
import djangoPhoto from '../images/skills/django.png'
import gitPhoto from '../images/skills/git.png'
import githubPhoto from '../images/skills/github.png'
import vsCodePhoto from '../images/skills/vs_code.png'

const Skills = () => {
    return (
        <div className="skills_box">
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon" src={htmlPhoto} alt="" />
              </div>
              <span>HTML</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon" src={cssPhoto} alt="" />
              </div>
              <span>CSS</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon small-photo" src={javaScriptPhoto} alt="" />
              </div>
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon" src={sassPhoto} alt="" />
              </div>
              <span>Sass</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon" src={reactPhoto} alt="" />
              </div>
              <span>React</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon small-photo" src={gatsbyPhoto} alt="" />
              </div>
              <span>GatsbyJS</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon" src={expressPhoto} alt="" />
              </div>
              <span>Express</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon" src={nodePhoto} alt="" />
              </div>
              <span>NodeJS</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon" src={mongoDbPhoto} alt="" />
              </div>
              <span>MongoDB</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon" src={restAPIphoto} alt="" />
              </div>
              <span>Rest API</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon small-photo" src={pythonPhoto} alt="" />
              </div>
              <span>Python</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon" src={djangoPhoto} alt="" />
              </div>
              <span>Django</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon small-photo" src={gitPhoto} alt="" />
              </div>
              <span>Git</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon" src={githubPhoto} alt="" />
              </div>
              <span>Github</span>
            </div>
            <div className="skill">
              <div className="skill__img">
                <img className="skill__icon small-photo" src={vsCodePhoto} alt="" />
              </div>
              <span>VS Code</span>
            </div>

          </div>
    )
}

export default Skills
