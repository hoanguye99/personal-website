import React from 'react'

interface SectionHeaderProps {
  title: string
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="mb-4 py-5 sticky z-30 top-0 bg-slate-900/75 backdrop-blur">
      <h2 className="text-typography-title text-heading-2 tracking-widest">
        {props.title}
      </h2>
    </div>
  )
}

export default SectionHeader
