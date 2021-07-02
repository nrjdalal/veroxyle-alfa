import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <header className="bg-sky-300">
        <div className="mod-container h-16 flex justify-between items-center">
          <Link href="/">
            <a className="md:pl-2">
              <Image
                src="/logo.svg"
                alt=""
                width={216}
                height={36}
                objectFit="contain"
              />
            </a>
          </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
      </header>
    </>
  )
}

export default Navbar
