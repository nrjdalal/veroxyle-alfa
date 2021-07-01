import Link from 'next/link'

const Notice = () => {
  return (
    <>
      <div className="bg-sky-600">
        <div className="mod-container py-1.5 flex text-white items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>
            <span className="font-semibold">
              &nbsp;We&apos;re hiring!&nbsp;
            </span>
            <Link href="/careers">
              <a className="underline">Browse Careers</a>
            </Link>
            &nbsp;at VeroXyle.
          </p>
        </div>
      </div>
    </>
  )
}

export default Notice
