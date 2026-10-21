import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Delciane Pinheiro - Portfólio',
  description: 'Portfólio de Delciane Pinheiro, desenvolvedora fullstack. Explore meus projetos, habilidades e experiências profissionais.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
