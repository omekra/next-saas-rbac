import { Header } from '@/components/header'
import { Tabs } from '@/components/tabs'

export default async function OrgLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className="px-4 pt-4">
        <Header />
        <Tabs />
      </div>

      <main className="mx-auto w-full max-w-[1200px] px-4 py-4">
        {children}
      </main>
    </div>
  )
}
