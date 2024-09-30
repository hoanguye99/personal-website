import ProjectLink from '../ui/project-link'
import personal from './personal.png'
import SectionHeader from './section-header'
import ProjectImage from '../ui/project-image'
import { SingleProject } from './experience'
const ProjectSection = () => {
  return (
    <section>
      <SectionHeader title="PERSONAL PROJECT" />

      <ol>
        <SingleProject
          href={'https://hoanguye99.netlify.app/blog/'}
          projectLink={
            <ProjectLink
              href="https://hoanguye99.netlify.app/blog/"
              text="Personal Blog"
            />
          }
          content={
            <>
              Personal blog that teaches team members how to get started with
              ReactJS, NextJS and Tanstack Query
            </>
          }
          projectImage={
            <ProjectImage alt="Personal Website Image" src={personal} />
          }
        />
      </ol>
    </section>
  )
}

export default ProjectSection
