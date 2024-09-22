import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ProjectImageProps {
  src: StaticImageData
  alt: string
}

const ProjectImage = (props: ProjectImageProps) => {
  return (
    <Image
      alt={props.alt}
      width="200"
      height="48"
      src={props.src}
      className="mt-3 lg:mt-0 rounded border-2 border-typography-title/10 transition hover:border-typography-title/30"
    ></Image>
  )
}

export default ProjectImage
