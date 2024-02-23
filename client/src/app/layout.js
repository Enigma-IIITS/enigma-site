import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import MyNavbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Enigma IIITS',
    description: 'Enigma club, projects club of IIIT Sri City',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} dark:bg-neutral-900`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col justify-between overflow-x-hidden w-screen min-h-screen">
                        <MyNavbar />
                        {children}
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
