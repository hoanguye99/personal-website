import Link from 'next/link'
import React from 'react'

const Header = ({ inViews }: { inViews: boolean[] }) => {
  return (
    <header className="lg:max-h-[calc(100vh_-_10rem)] lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-20">
      <div>
        <h1 className="text-heading-0-sm sm:text-heading-0 text-typography-title">
          Hoang Nguyen
        </h1>
        <h2 className="mt-3 text-heading-1-sm sm:text-heading-1 text-typography-title">
          Frontend Engineer
        </h2>
        <p className="mt-4 max-w-xs text-typography-body">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <ul className="hidden lg:flex mt-16 font-bold text-[13px] uppercase !tracking-widest flex-col gap-4">
          <BookMark href="about" active={inViews[0]} />
          <BookMark href="experience" active={inViews[1]} />
          <BookMark href="project" active={inViews[2]} />
        </ul>
      </div>
      <ul
        className="ml-1 mt-8 flex items-center gap-5"
        aria-label="Social media"
      >
        <SocialIcon link="https://github.com/hoanguye99" sr="Github">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </SocialIcon>
        <SocialIcon
          link="https://www.linkedin.com/in/hoang-nguyen1/"
          sr="Linkedin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </SocialIcon>
        <SocialIcon link="https://hoanguye99.netlify.app/" sr="Blog">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
          >
            <path d="M12 2C6.48583 2 2 6.48583 2 12C2 17.5142 6.48583 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48583 17.5142 2 12 2ZM8.66667 10.3333C8.66667 8.4925 10.2033 7 12 7C13.7967 7 15.3333 8.4925 15.3333 10.3333V11.1667C15.3333 13.0075 13.7967 14.5 12 14.5C10.2033 14.5 8.66667 13.0075 8.66667 11.1667V10.3333ZM12 20.3333C9.9725 20.3333 8.1125 19.6033 6.66583 18.395C7.365 17.0758 8.73583 16.1667 10.3333 16.1667H13.6667C15.2642 16.1667 16.635 17.0758 17.3342 18.395C15.8875 19.6033 14.0275 20.3333 12 20.3333Z" />
          </svg>
        </SocialIcon>
      </ul>
    </header>
  )
}

interface SocialIconProps {
  link: string
  sr: string
  children: React.ReactNode
}

const SocialIcon = (props: SocialIconProps) => {
  return (
    <li className="text-xs shrink-0">
      <Link
        className="block transition-colors hover:text-typography-title"
        href={props.link}
      >
        <span className="sr-only">{props.sr}</span>
        {props.children}
      </Link>
    </li>
  )
}

interface BookMarkProps {
  href: string
  active: boolean
}

const BookMark = (props: BookMarkProps) => {
  return (
    <li>
      <a
        href={`#${props.href}`}
        className={`transition-all duration-300 ease-in-out flex items-center gap-4 ${
          props.active ? 'text-typography-title' : 'text-typography-subtitle'
        }`}
      >
        <div
          className={`h-[1px] origin-left transition-all duration-300 ease-in-out  ${
            props.active
              ? 'bg-typography-title w-16'
              : 'bg-typography-subtitle w-8'
          }`}
        ></div>
        <span className="uppercase">{props.href}</span>
      </a>
    </li>
  )
}

export default Header
