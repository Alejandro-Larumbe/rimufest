// import 'tailwindcss/tailwind.css'
import '../styles/tailwind.css';
import { ThemeProvider} from 'next-themes'

import { LanguageProvider } from '../intl/LanguageProvider'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {


  return (
    <ThemeProvider attribute="media">
      <LanguageProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default MyApp
