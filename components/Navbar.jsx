import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const Deskdown = (props) => {
    return (
      <>
        <div className="flex items-center px-4 py-1 rounded hover:bg-sky-500">
          <span className="text-lg text-white tracking-widest">
            {props.title}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </>
    )
  }

  return (
    <>
      {/* <div className="relative"> */}
      <header className="sticky top-0 z-10 bg-sky-800 border-opacity-5">
        <div className="mod-container h-16 flex justify-between items-center cursor-default">
          <Link href="/">
            <a className="md:pl-2 pt-2">
              <Image
                src="/logo.svg"
                alt=""
                width={216}
                height={36}
                objectFit="contain"
              />
            </a>
          </Link>

          <nav className="hidden lg:flex mr-[-0.5rem]">
            <Deskdown title="About" />
            <Deskdown title="Services" />
            <Deskdown title="Work" />
            <Deskdown title="Blog" />
            <button className="text-white tracking-widest mx-4 px-4 bg-sky-500 hover:bg-sky-600 rounded">
              CONTACT
            </button>
          </nav>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-sky-200 lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
      </header>
      {/* </div> */}
    </>
  )
}

export default Navbar
