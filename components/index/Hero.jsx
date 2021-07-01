import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="mod-container flex flex-col items-center text-center">
        <div className="rounded-2xl w-36 h-36 sm:w-60 sm:h-60 mt-24 overflow-hidden">
          <Image
            src="/images/index/hero.webp"
            alt=""
            height={240}
            width={240}
            objectFit="cover"
          />
        </div>
        <h1 className="font-semibold text-3xl sm:text-4xl mt-6">
          Design now, develop after
          <br />
          and market later.
        </h1>
        <h2 className="text-lg sm:text-xl mt-4">
          At VeroXyle and we love building great brands & digital experiences.
          Our hardworking and dedicated team contribute to your project so that
          you can achieve all the goals you&apos;ve set for yourself.
        </h2>
      </div>
    </>
  )
}

export default Hero
