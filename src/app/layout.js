import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <body className={inter.className}>
            <div className="container" data-bs-theme="light">
                <div className="row">
                    <Navbar/>
                </div>
                <div className="row">
                    {children}
                </div>
            </div>
        </body>
    </html>
  )
}
