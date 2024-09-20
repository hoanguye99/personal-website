import React from 'react'
import SectionHeader from './section-header'
import ProjectLink from '../ui/project-link'
import Image from 'next/image'
import personalWebImage from './personal_web.png'
const ProjectSection = () => {
  return (
    <section>
      <SectionHeader title="PERSONAL PROJECT" />
      <div className="">
        <h3 className="group">
          <ProjectLink href="https://www.klaviyo.com/" text="Personal Blog" />
        </h3>
        <p className="mt-2 text-body">
          Video course that teaches how to build a web app with the Spotify Web
          API. Topics covered include the principles of REST APIs, user auth
          flows, Node, Express, React, Styled Components, and more.
        </p>
        <Image
          alt="Personal Website Image"
          width="200"
          height="48"
          src={personalWebImage}
          className="mt-3 rounded border-2 border-typography-title/10 transition hover:border-typography-title/30"
        ></Image>
      </div>
    </section>
  )
}

export default ProjectSection
