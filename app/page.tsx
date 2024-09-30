import Header from '@/components/page/header'
import Main from '@/components/page/main'

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto min-h-screen px-6 py-12 md:px-12 md:py-20 lg:px-24">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(
              600px circle at 0px 0px,
              rgba(29, 78, 216, 0.15),
              transparent 80%
            )"`,
        }}
      ></div>
      <div className="grid lg:grid-cols-[4fr_5fr] lg:gap-16">
        <Header />
        <Main />
      </div>
    </div>
  )
}
