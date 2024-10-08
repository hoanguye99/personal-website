import Link from 'next/link'
import React from 'react'

interface ProjectLinkProps {
  href: string
  text: string
  className?: string
}

const ProjectLink = (props: ProjectLinkProps) => {
  return (
    <Link
      className={`text-typography-title text-title lg:text-[1.125rem] group-hover:text-primary-base transition-colors ${props.className}`}
      href={props.href}
    >
      <span>{props.text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="inline-block h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </Link>
  )
}

export default ProjectLink
