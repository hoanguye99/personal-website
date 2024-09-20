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

export default HighlightLink
