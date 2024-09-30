import Link from 'next/link'
import React from 'react'

interface HighlightLinkProps {
  href: string
  text: string
  className?: string
}

const HighlightLink = (props: HighlightLinkProps) => {
  return (
    <Link
      className={`text-typography-title/80 font-medium hover:text-primary-base/80 transition-colors ${props.className}`}
      href={props.href}
    >
      {props.text}
    </Link>
  )
}

interface AdditionalLinkProps {
  href: string
  text: string
  className?: string
}

export const AdditionalLink = (props: AdditionalLinkProps) => {
  return (
    <Link
      className={`text-typography-title/90 font-medium text-xs sm:text-title sm:text-sm hover:text-primary-base/90 transition-colors flex items-center ${props.className}`}
      href={props.href}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="mr-1 h-3 w-3"
        aria-hidden="true"
      >
        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
      </svg>
      {props.text}
    </Link>
  )
}

export default HighlightLink
