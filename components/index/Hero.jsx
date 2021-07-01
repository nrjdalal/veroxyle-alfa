import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="relative bg-sky-500">
        {/* Divider */}
        <svg
          className="absolute bottom-0 h-3/4 w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
            fill="#38BDF8"
            fillOpacity="1"
          ></path>
        </svg>
        {/* Hero Section */}
        <div className="relative z-[1] mod-container flex flex-col items-center text-center">
          <div className="rounded-2xl w-36 h-36 sm:w-60 sm:h-60 mt-24 overflow-hidden">
            <Image
              src="/images/index/hero.webp"
              alt=""
              height={500}
              width={500}
              objectFit="cover"
            />
          </div>
          <h1 className="font-semibold text-4xl sm:text-4xl mt-6 text-white">
            Turing ideas to reality
            <br />
            via Design.
          </h1>
          <h2 className="text-xl sm:text-2xl mt-4 text-white">
            At VeroXyle we love building great brands & digital experiences. Our
            hardworking and dedicated team contribute to your project so that
            you can achieve all the goals you&apos;ve set for yourself.
          </h2>
          <button className="bg-sky-700 text-white px-3 py-2 rounded-xl mt-8 mb-24 text-lg tracking-wider hover:bg-sky-900">
            Contact Us
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero
