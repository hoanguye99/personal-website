import React from 'react'
import SectionHeader from './section-header'
import Tag from '../ui/tag'
import Link from 'next/link'
import ProjectLink from '../ui/project-link'
import TechList from '../ui/tech-list'

const ExperienceSection = () => {
  return (
    <section>
      <SectionHeader title="EXPERIENCE" />
      <ol className="group/list flex flex-col gap-12 ">
        <li>
          <div className="">
            <header className="mb-2 mt-1 text-xs uppercase tracking-wide font-semibold text-typography-subtitle">
              2024 — Present
            </header>
            <div>
              <h3 className="group">
                <ProjectLink
                  href="https://www.klaviyo.com/"
                  text="Senior Frontend Engineer, Accessibility · Klaviyo"
                />
              </h3>
              <p className="mt-2 text-body">
                Build and maintain critical components used to construct
                Klaviyo’s frontend, across the whole product. Work closely with
                cross-functional teams, including developers, designers, and
                product managers, to implement and advocate for best practices
                in web accessibility.
              </p>
            </div>
            <TechList
              list={['JavaScript', 'TypeScript', 'React', 'Storybook']}
            />
          </div>
        </li>
        <li>
          <div className="">
            <header className="mb-2 mt-1 text-xs uppercase tracking-wide font-semibold text-typography-subtitle">
              2018 — 2024
            </header>
            <div>
              <h3 className="group">
                <ProjectLink
                  href="https://www.klaviyo.com/"
                  text="Lead Engineer · Upstatement"
                />
              </h3>
              <p className="mt-2 text-body">
                Build, style, and ship high-quality websites, design systems,
                mobile apps, and digital experiences for a diverse array of
                projects for clients including Harvard Business School,
                Everytown for Gun Safety, Pratt Institute, Koala Health,
                Vanderbilt University, The 19th News, and more. Provide
                leadership within engineering department through close
                collaboration, knowledge shares, and spearheading the
                development of internal tools.
              </p>
            </div>
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
          </div>
        </li>
        <li>
          <div className="">
            <header className="mb-2 mt-1 text-xs uppercase tracking-wide font-semibold text-typography-subtitle">
              July - Dec 2017
            </header>
            <div>
              <h3 className="group">
                <ProjectLink
                  href="https://www.klaviyo.com/"
                  text="UI Engineer Co-op· Apple"
                />
              </h3>
              <p className="mt-2 text-body">
                Developed and styled interactive web apps for Apple Music,
                including the user interface of Apple Music’s embeddable web
                player widget for in-browser user authorization and full song
                playback.
              </p>
            </div>
            <TechList list={['Ember', 'SCSS', 'Javascript', 'MusicKit.js']} />
          </div>
        </li>
        <li>
          <div className="">
            <header className="mb-2 mt-1 text-xs uppercase tracking-wide font-semibold text-typography-subtitle">
              2016 - 2017
            </header>
            <div>
              <h3 className="group">
                <ProjectLink
                  href="https://www.klaviyo.com/"
                  text="Developer · Scout Studio"
                />
              </h3>
              <p className="mt-2 text-body">
                Collaborated with other student designers and engineers on
                pro-bono projects to create new brands, design systems, and
                websites for organizations in the community.
              </p>
            </div>
            <TechList list={['Jekyll', 'SCSS', 'Javascript', 'WordPress']} />
          </div>
        </li>
        <div className="group">
          <ProjectLink
            className="text-[1.1rem]"
            href="https://www.klaviyo.com/"
            text="View Full Resume"
          />
        </div>
      </ol>
    </section>
  )
}

export default ExperienceSection
