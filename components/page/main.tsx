import React from 'react'
import AboutSection from './about'
import ExperienceSection from './experience'
import ProjectSection from './project'
import HighlightLink from '../ui/highlight-link'

const Main = () => {
  return (
    <div>
      <main className="pt-24 lg:pt-0 flex flex-col gap-16 lg:gap-32">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </main>
      <footer className="mt-16 lg:mt-32">
        <p className="text-body text-typography-subtitle leading-normal max-w-md lg:max-w-xl">
          Design inspired by
          <HighlightLink
            href="https://github.com/bchiang7"
            text=" Brittany Chiang. "
          />
          Built with
          <HighlightLink href="https://nextjs.org/" text=" Next.js " />
          and
          <HighlightLink
            href="https://tailwindcss.com/"
            text=" Tailwind CSS, "
          />
          deployed with
          <HighlightLink href="https://vercel.com/" text=" Vercel. " />
          All text is set in the
          <HighlightLink href="https://rsms.me/inter/" text=" Inter " />
          typeface.
        </p>
      </footer>
    </div>
  )
}

export default Main
