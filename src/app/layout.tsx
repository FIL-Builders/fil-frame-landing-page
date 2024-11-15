import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Quicksand } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const quicksand = Quicksand({ 
  subsets: ['latin'],
  variable: '--font-quicksand'
});

export const metadata = {
<<<<<<< HEAD
  title: 'FIL-Frame | Build Filecoin dApps Faster',
  description: 'Start building decentralized applications on Filecoin in minutes with pre-configured templates, React components, and storage integrations like Lighthouse. Zero configuration required.',
  icons: {
    icon: [
      { url: '/fil-favicon.ico', type: 'image/x-icon' },
      { url: '/fil-favicon.ico', type: 'image/ico' },
    ],
    shortcut: '/fil-favicon.ico',
    apple: '/fil-favicon.ico',
  },
  keywords: 'Filecoin, dApp Development, Web3, Blockchain, Developer Tools, React Components, Storage Providers, Lighthouse, Smart Contracts, TypeScript, Decentralized Storage',
  openGraph: {
    title: 'FIL-Frame | Build Filecoin dApps Faster',
    description: 'Start building decentralized applications on Filecoin in minutes with pre-configured templates, React components, and storage integrations like Lighthouse. Zero configuration required.',
    url: 'https://fil-frame.vercel.app/',
    siteName: 'FIL-Frame',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FIL-Frame - Zero-configuration CLI tool for building Filecoin applications'
      }
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', 
    title: 'FIL-Frame | Build Filecoin dApps Faster',
    description: 'Start building decentralized applications on Filecoin in minutes with pre-configured templates, React components, and storage integrations like Lighthouse. Zero configuration required.',
    creator: '@FILBuilders',
    images: ['/og-image.png'],
  },
=======
  title: 'FIL FRAME',
  description: 'A Filecoin dApp Starter Kit',
>>>>>>> main
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${quicksand.variable}`}>
      <body className="font-quicksand">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
