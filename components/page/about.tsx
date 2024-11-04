import React, { forwardRef, Ref } from 'react'
import SectionHeader from './section-header'
import TechList from '../ui/tech-list'

const AboutSection = forwardRef<HTMLElement, any>((props, ref) => {
  return (
    <section id="about" ref={ref}>
      <SectionHeader title="ABOUT" />
      <div className="flex flex-col gap-4">
        <p>
          Hello, my name is Hoang and I create things that live on the internet.
          I enjoy building software in the sweet spot where design and
          engineering meet — things that look good but are also built well under
          the hood.
        </p>
        {/* <p>
          I spend a great deal of time tinkering with design systems, as I
          firmly believe that a high-quality UI is built on high-quality
          components. Components should not only be visually appealing but also
          interactive, with smooth and fluid transitions to enhance the user
          experience.
        </p> */}
        <p>
          I have had 5+ years working at FPT IS, 3+ years working as a frontend
          developer. In my job, I mainly focus on developing new features,
          improving existing UIs, maintaining the design system, reviewing code
          and mentoring new team members. I've also written a personal blog to
          explain the fundamentals of Tanstack Query to my team members.
        </p>
        <p>
          I am currently seeking a new opportunity where I can contribute to a
          product-focused team and collaborate in an English-speaking
          environment
        </p>
        <div className="grid gap-5 lg:grid-cols-4 lg:mt-5">
          <p className="-mt-[2px]">Recent techstack:</p>
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div>
              <p className="text-body text-typography-subtitle">
                Programming Languages:
              </p>
              <TechList
                list={['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass']}
              />
            </div>
            <div>
              <p className="text-body text-typography-subtitle">
                Libraries & Frameworks:
              </p>
              <TechList
                list={[
                  'React',
                  'Next.js',
                  'Tailwind CSS',
                  'Framer Motion',
                  'Tanstack Query',
                  'React Hook Form',
                  'Zustand',
                ]}
              />
            </div>
            <div>
              <p className="text-body text-typography-subtitle">
                Tools & Platforms:
              </p>
              <TechList
                list={[
                  'Git',
                  'Vercel',
                  'Storybook',
                  'shadcn/ui',
                  'CVA',
                  'Figma',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default AboutSection
