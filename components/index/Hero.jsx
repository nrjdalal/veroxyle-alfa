import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="mod-container flex flex-col items-center text-center">
        <img
          className="rounded-2xl w-36 h-36 sm:w-60 sm:h-60 mt-12"
          src="https://source.unsplash.com/500x500/?technology"
          alt=""
        />
        <h1 className="font-semibold text-3xl sm:text-4xl mt-6">
          Design now, develop after
          <br />
          and market later.
        </h1>
        <h2 className="text-lg sm:text-xl mt-4">
          At VeroXyle and we love building great brands & digital experiences.
        </h2>
      </div>
    </>
  )
}

export default Hero
