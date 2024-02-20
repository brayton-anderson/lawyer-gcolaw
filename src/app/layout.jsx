import LoadingContextProvider from '../../components/loader-context-provider'
import './globals.css'
import { Inter } from 'next/font/google'
// import ScrollToTopB from '../../components/scrollToTopB'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: {
    icon: [
      {      
        url: '../logo.png',
        href: '../logo.png',
      },],},
  
  title: 'Gakunju & Co. Advocates',
  description: 'Gakunju & Co. Advocates is a boutique corporate, commercial and tax law firm operating in Kiambu and Nairobi, with our regional reach across several jurisdictions.',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
        <body className={inter.className} > 
        <LoadingContextProvider>
        {children} 
        {/* <ScrollToTopB/> */}
        </LoadingContextProvider>
        </body> 
    </html >
      )
}