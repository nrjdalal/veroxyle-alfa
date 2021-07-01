import '../styles/globals.css'

// Global imports
import Notice from '../components/Notice'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Notice />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
