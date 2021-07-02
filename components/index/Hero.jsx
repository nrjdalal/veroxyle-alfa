import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <section className="relative bg-sky-200 py-20">
        {/* Divider */}
        <svg
          className="absolute -bottom-1 h-3/5 w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
            fill="#E0F2FE"
            fillOpacity="1"
          ></path>
        </svg>
        {/* Hero Section */}
        <div className="relative mod-container flex flex-col md:flex-row md:items-center">
          {/* Image */}
          <div className="rounded-2xl w-36 h-36 md:w-72 md:h-72 overflow-hidden">
            <Image
              src="/images/index/hero.webp"
              alt=""
              height={576}
              width={576}
              objectFit="cover"
            />
          </div>
          {/* h1 h2 button */}
          <div className="flex-1 md:ml-8">
            <h1 className="font-semibold text-4xl mt-6 md:mt-0 text-gray-900">
              Turning ideas to reality
              <br />
              via Design.
            </h1>
            <h2 className="lg:text-xl mt-4 text-gray-600">
              At VeroXyle we love building great brands & digital experiences.
              Our hardworking and dedicated team contribute to your project so
              that you can achieve all the goals you&apos;ve set for yourself.
            </h2>
            <button className="bg-sky-500 text-white w-72 py-2.5 rounded-xl mt-8 text-lg tracking-wider hover:bg-sky-600">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
