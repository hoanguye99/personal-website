'use client'

import Header from '@/components/page/header'
import Main from '@/components/page/main'
import { MouseEventHandler, useState } from 'react'

export default function Home() {
  const [inViews, setInViews] = useState([true, false, false])
  const [flashlightPos, setFlashlightPos] = useState([0, 0])
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    setFlashlightPos([
      event.pageX - flashlightOffset,
      event.pageY - flashlightOffset,
    ])
  }
  const lightRadius = 700
  const flashlightOffset = lightRadius / 2
  return (
    <div className="overflow-clip">
      <div
        onMouseMove={handleMouseMove}
        className="relative max-w-screen-xl mx-auto min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-24"
      >
        <span
          style={{
            filter: `url(#blur-filter)`,
            width: `${lightRadius}px`,
            height: `${lightRadius}px`,
            left: `${flashlightPos[0]}px`,
            top: `${flashlightPos[1]}px`,
            background: `radial-gradient(rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
          className="lg:absolute rounded-[50%] pointer-events-none"
        ></span>
        <svg className="hidden">
          <defs>
            <filter id="blur-filter">
              <feGaussianBlur stdDeviation={100} />
            </filter>
          </defs>
        </svg>
        <div className="grid lg:grid-cols-[4fr_5fr] lg:gap-16">
          <Header inViews={inViews} />
          <Main setInViews={setInViews} />
        </div>
      </div>
    </div>
  )
}
