'use client'

import { MouseEventHandler, useState, useEffect, useRef } from 'react'
import Header from '@/components/page/header'
import Main from '@/components/page/main'

export default function Home() {
  const [inViews, setInViews] = useState([true, false, false])
  const [flashlightPos, setFlashlightPos] = useState([0, 0])
  const containerRef = useRef<HTMLDivElement>(null)
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setFlashlightPos([
        event.clientX - rect.left - flashlightOffset,
        event.clientY - rect.top - flashlightOffset,
      ])
    }
  }

  const lightRadius = 700
  const flashlightOffset = lightRadius / 2
  return (
    <div className="overflow-clip">
      <div className="flex justify-center">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative max-w-screen-xl min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-24"
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
    </div>
  )
}
