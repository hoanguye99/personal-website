import Link from 'next/link'
import React from 'react'

interface LinkWrapperProps {
  children: React.ReactNode
  href: string
}

const LinkWrapper = (props: LinkWrapperProps) => {
  return (
    <>
      <Link href={`${props.href}`} className="hidden lg:block">
        {props.children}
      </Link>
      <div className="block lg:hidden">{props.children}</div>
    </>
  )
}

export default LinkWrapper
