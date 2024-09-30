import React from 'react'
import SectionHeader from './section-header'
import ProjectLink from '../ui/project-link'
import TechList from '../ui/tech-list'
import ProjectImage from '../ui/project-image'
import personalWebImage from './personal_web.png'
import BIDVIMG from './bidv.png'
import AKA from './aka247.png'
import SOC from './soc.png'
import IBM from './ibm.png'
import { AdditionalLink } from '../ui/highlight-link'
import Link from 'next/link'
import LinkWrapper from '../ui/link-wrapper'

const ExperienceSection = () => {
  return (
    <section>
      <SectionHeader title="EXPERIENCE" />
      <ol className="group/list flex flex-col gap-12 ">
        <SingleProject
          href="https://aka247.fpt.com/"
          timeline="2023 — Present"
          projectLink={
            <ProjectLink
              href="https://aka247.fpt.com/"
              text="Frontend Developer, Mentor • AKA247"
            />
          }
          content={
            <ul className="list-inside list-disc indent-[-1rem] pl-4 *:mb-1.5">
              <li>
                Develop features for a SAAS application that provides a service
                desk solution for service providers.
              </li>
              <li>
                Build and maintain the project design system based on FPT IS
                guidelines and Figma design, document components using Storybook
              </li>
              <li>
                Communicate and exchange ideas with BA & PM to transform
                creative concepts into refined UIs
              </li>
              <li>
                Mentor new team members, review UIs and code before merging,
                improve code quality
              </li>
            </ul>
          }
          techList={
            <TechList
              list={[
                'Next.js',
                'Typescript',
                'Tailwind CSS',
                'Tanstack Query',
                'React Hook Form',
                'Zustand',
                'Framer Motion',
              ]}
            />
          }
          projectImage={
            <ProjectImage className="bg-white" alt="AKA247 Image" src={AKA} />
          }
          additionalLinks={
            <AdditionalLink
              href="https://fpt-is.com/aka247/"
              text={'Product Flyer'}
            />
          }
        />
        <SingleProject
          href="https://fpt-is.com/en/eagleeye-msoc/"
          timeline="June 2022 — 2023"
          projectLink={
            <ProjectLink
              href="https://fpt-is.com/en/eagleeye-msoc/"
              text="Frontend Developer • EagleEye mSOC"
            />
          }
          content={
            <ul className="list-inside list-disc indent-[-1rem] pl-4 *:mb-1.5">
              <li>
                Developed features for a SAAS application portal that monitors
                security incidents and manages threats
              </li>
              <li>
                Researched new tech and built front-end project from the ground
                up
              </li>
            </ul>
          }
          techList={
            <TechList
              list={['React', 'Next.js', 'Tailwind CSS', 'Tanstack Query']}
            />
          }
          projectImage={
            <ProjectImage className="bg-white" alt="mSOC Image" src={SOC} />
          }
          additionalLinks={
            <AdditionalLink
              href="https://fpt-is.com/eagleeye-msoc/"
              text={'Product Flyer'}
            />
          }
        />
        <SingleProject
          href="https://openapi.bidv.com.vn/devportal/"
          timeline="June 2021 - June 2022"
          projectLink={
            <ProjectLink
              href="https://openapi.bidv.com.vn/devportal/"
              text="Frontend Developer • BIDV Open API"
            />
          }
          content={
            <ul className="list-inside list-disc indent-[-1rem] pl-4 *:mb-1.5">
              <li>
                Developed a Drupal custom theme that conforms to client brand
                guidelines and Figma design for BIDV Developer Portal
              </li>
              <li>
                Write documents, migrated code and ensured consistency between
                different environments
              </li>
            </ul>
          }
          techList={<TechList list={['Drupal', 'Sass', 'HTML', 'CSS']} />}
          projectImage={
            <ProjectImage alt="BIDV Open API Image" src={BIDVIMG} />
          }
          additionalLinks={
            <AdditionalLink
              href="https://bidv.com.vn/bidv/tin-tuc/tin-ve-bidv/bidv-open-api-dan-dau-xu-the-ngan-hang-mo"
              text={'Product Flyer'}
            />
          }
        />
        <SingleProject
          href=""
          timeline="2020 - June 2021"
          projectLink={<ProjectLink href="" text="Integration Engineer" />}
          content={
            <ul className="list-inside list-disc indent-[-1rem] pl-4 *:mb-1.5">
              <li>Developed Open API services using IBM API Connect</li>
              <li>
                Developed ESB REST and SOAP services using IBM App Connect
                Enterprise
              </li>
            </ul>
          }
          techList={<TechList list={['Java', 'JavaScript', 'Node.js']} />}
          projectImage={<ProjectImage alt="IBM API Connect Image" src={IBM} />}
        />
      </ol>
      <div className="group mt-8">
        <ProjectLink
          className="text-[1.1rem]"
          href="/Hoang Nguyen Resume.pdf"
          text="View Full Resume"
        />
      </div>
    </section>
  )
}

interface SingleProjectProps {
  href: string
  timeline?: string
  projectLink: React.ReactNode
  content: React.ReactNode
  additionalLinks?: React.ReactNode
  techList?: React.ReactNode
  projectImage: React.ReactNode
}

export const SingleProject = (props: SingleProjectProps) => {
  return (
    <li>
      <LinkWrapper href={props.href}>
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
            {props.additionalLinks && (
              <div className="flex gap-3 py-2">{props.additionalLinks}</div>
            )}
            {props.techList}
          </div>
          {props.projectImage}
        </div>
      </LinkWrapper>
    </li>
  )
}

export default ExperienceSection
