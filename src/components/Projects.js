import React from 'react'
import { projects } from '../assets/projectList/projectList'


const Projects = () => {
    return (
        <div>
            <h2 className="major">Projects</h2>
            {
              projects.map((project, i) => (
                <div key={i} className="projectContainer">
                  <div className="projectImageContainer">
                    <img src={project.imageUrl} alt="Stonk."/>
                  </div>
                  <div className="projectDescribeContainer">
                    <h3>{project.title}</h3>
                    <h4>Technologies Used:</h4>
                    <h4>
                      {
                        project.technologiesUsed.map((tech, i, arr) => {
                          if (arr.length - 1 === i) {
                            return <span key={i} className="techStack">{tech}</span>
                          } else {
                            return <span key={i} className="techStack">{tech}, </span>
                          }
                        })
                      }
                    </h4>
                    <ul>
                      {
                        project.description.map((description, i) => (
                          <li key={i}>{description}</li>
                        ))
                      }
                    </ul>
                    <div className="projectLinks">
                      <a href={project.liveUrl} className="liveLink" target="_blank" rel="noopener noreferrer">Live</a>
                      <a href={project.githubUrl} className="repoLink" target="_blank" rel="noopener noreferrer">Repo</a>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
    )
}

export default Projects
