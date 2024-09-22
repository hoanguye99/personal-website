import React from 'react'
import SectionHeader from './section-header'
import ProjectLink from '../ui/project-link'
import Image from 'next/image'
import personalWebImage from './personal_web.png'
import ProjectImage from '../ui/project-image'
import { SingleProject } from './experience'
const ProjectSection = () => {
  return (
    <section>
      <SectionHeader title="PERSONAL PROJECT" />

      <ol>
        <SingleProject
          projectLink={
            <ProjectLink href="https://www.klaviyo.com/" text="Personal Blog" />
          }
          content={
            <>
              Video course that teaches how to build a web app with the Spotify
              Web API. Topics covered include the principles of REST APIs, user
              auth flows, Node, Express, React, Styled Components, and more.
            </>
          }
          projectImage={
            <ProjectImage alt="Personal Website Image" src={personalWebImage} />
          }
        />
      </ol>
    </section>
  )
}

export default ProjectSection
