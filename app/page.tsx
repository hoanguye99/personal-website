import Header from '@/components/page/header'
import Main from '@/components/page/main'

export default function Home() {
  return (
    <div className="px-6 min-h-screen py-12 pb-20">
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
      <div className="">
        <Header />
        <Main />
      </div>
    </div>
  )
}
