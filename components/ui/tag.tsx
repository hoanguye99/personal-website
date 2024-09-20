import React from 'react'

interface TagProps {
  children: React.ReactNode
}

const Tag = (props: TagProps) => {
  return (
    <span className="px-3 py-1 text-tag text-primary-base flex items-center rounded-full bg-primary-background">
      {props.children}
    </span>
  )
}

export default Tag
