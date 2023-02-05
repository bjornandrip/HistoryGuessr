import '@/styles/globals.css'
import {MedievalSharp} from '@next/font/google';

const medievalsharp = MedievalSharp({
  subsets:['latin'],
  weight: ['400'],
})
export default function App({ Component, pageProps }) {
  return (
    <main className={medievalsharp.className}>
      <Component {...pageProps} />
    </main>
  )
}
