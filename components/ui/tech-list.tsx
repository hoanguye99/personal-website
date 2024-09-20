import React from 'react'
import Tag from './tag'

interface TechListProps {
  list: string[]
}

const TechList = (props: TechListProps) => {
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {props.list.map((tech) => (
        <li>
          <Tag>{tech}</Tag>
        </li>
      ))}
    </ul>
  )
}

export default TechList
