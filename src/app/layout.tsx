import './globals.css'
import { Inter } from 'next/font/google'
import SearchInput from '@/components/SearchInput'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`bg-slate-900 text-slate-200 ${inter.className}`}>
        <div className="flex flex-col gap-10 items-center p-6">
          <SearchInput />
          <main className="flex flex-col items-center w-full">{children}</main>
        </div>
      </body>
    </html>
  )
}
