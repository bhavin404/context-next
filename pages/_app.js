import '../styles/globals.css'
import DatasProvider from './context/DatasProvider'

function MyApp({ Component, pageProps }) {
  return <DatasProvider> 
            <Component {...pageProps} />
          </DatasProvider>
}

export default MyApp
