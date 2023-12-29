import Dashboard from '@/components/Dashboard/dashboard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col lg:pl-[230px] justify-between lg:pt-7 lg:p-32">
          <Dashboard />
    </main>
  )
}
