import Header from '@/components/Header'
import './globals.css'
import { gowunDodum } from './fonts'
import Providers from '@/components/Providers'
import Footer from '@/components/Footer'

export const metadata = {
  title: "JunHyeokShin's Portfolio",
  description: "JunHyeokShin's Portfolio Website.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={gowunDodum.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
