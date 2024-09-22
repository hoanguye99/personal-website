import React from 'react'
import SectionHeader from './section-header'
import Tag from '../ui/tag'
import Link from 'next/link'
import ProjectLink from '../ui/project-link'
import TechList from '../ui/tech-list'
import ProjectImage from '../ui/project-image'
import personalWebImage from './personal_web.png'

const ExperienceSection = () => {
  return (
    <section>
      <SectionHeader title="EXPERIENCE" />
      <ol className="group/list flex flex-col gap-12 ">
        <SingleProject
          timeline="2024 — Present"
          projectLink={
            <ProjectLink
              href="https://www.klaviyo.com/"
              text="Senior Frontend Engineer, Accessibility · Klaviyo"
            />
          }
          content={
            <>
              Build and maintain critical components used to construct Klaviyo’s
              frontend, across the whole product. Work closely with
              cross-functional teams, including developers, designers, and
              product managers, to implement and advocate for best practices in
              web accessibility.
            </>
          }
          techList={
            <TechList
              list={['JavaScript', 'TypeScript', 'React', 'Storybook']}
            />
          }
          projectImage={
            <ProjectImage alt="Personal Website Image" src={personalWebImage} />
          }
        />
        <SingleProject
          timeline="2018 — 2024"
          projectLink={
            <ProjectLink
              href="https://www.klaviyo.com/"
              text="Lead Engineer · Upstatement"
            />
          }
          content={
            <>
              Build, style, and ship high-quality websites, design systems,
              mobile apps, and digital experiences for a diverse array of
              projects for clients including Harvard Business School, Everytown
              for Gun Safety, Pratt Institute, Koala Health, Vanderbilt
              University, The 19th News, and more. Provide leadership within
              engineering department through close collaboration, knowledge
              shares, and spearheading the development of internal tools.
            </>
          }
          techList={
            <TechList
              list={[
                'JavaScript',
                'TypeScript',
                'HTML & SCSS',
                'React',
                'Next.js',
                'React Native',
                'WordPress',
                'Contentful',
                'Node.js',
                'PHP',
              ]}
            />
          }
          projectImage={
            <ProjectImage alt="Personal Website Image" src={personalWebImage} />
          }
        />
        <SingleProject
          timeline="July - Dec 2017"
          projectLink={
            <ProjectLink
              href="https://www.klaviyo.com/"
              text="UI Engineer Co-op· Apple"
            />
          }
          content={
            <>
              Developed and styled interactive web apps for Apple Music,
              including the user interface of Apple Music’s embeddable web
              player widget for in-browser user authorization and full song
              playback.
            </>
          }
          techList={
            <TechList list={['Ember', 'SCSS', 'Javascript', 'MusicKit.js']} />
          }
          projectImage={
            <ProjectImage alt="Personal Website Image" src={personalWebImage} />
          }
        />
        <SingleProject
          timeline="2016 - 2017"
          projectLink={
            <ProjectLink
              href="https://www.klaviyo.com/"
              text="Developer · Scout Studio"
            />
          }
          content={
            <>
              Collaborated with other student designers and engineers on
              pro-bono projects to create new brands, design systems, and
              websites for organizations in the community.
            </>
          }
          techList={
            <TechList list={['Jekyll', 'SCSS', 'Javascript', 'WordPress']} />
          }
          projectImage={
            <ProjectImage alt="Personal Website Image" src={personalWebImage} />
          }
        />
      </ol>
      <div className="group mt-8">
        <ProjectLink
          className="text-[1.1rem]"
          href="https://www.klaviyo.com/"
          text="View Full Resume"
        />
      </div>
    </section>
  )
}

interface SingleProjectProps {
  timeline?: string
  projectLink: React.ReactNode
  content: React.ReactNode
  techList?: React.ReactNode
  projectImage: React.ReactNode
}

export const SingleProject = (props: SingleProjectProps) => {
  return (
    <li>
      <div className="grid lg:grid-cols-4 lg:gap-6 transition-all lg:group-has-[:hover]/list:opacity-50 lg:hover:!opacity-100 lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:py-4 lg:px-6 lg:-mx-6 rounded-lg">
        <div className="lg:col-span-3 lg:order-last">
          {props.timeline && (
            <header className="mb-2 mt-1 text-xs uppercase tracking-wide font-semibold text-typography-subtitle">
              {props.timeline}
            </header>
          )}

          <div>
            <h3 className="group">{props.projectLink}</h3>
            <p className="mt-2 text-body">{props.content}</p>
          </div>
          {props.techList}
        </div>
        {props.projectImage}
      </div>
    </li>
  )
}

export default ExperienceSection
