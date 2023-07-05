'use client'

import {useSession} from 'next-auth/react'
import TripSearch from './components/TripSearch'
import QuickSearch from './components/QuickSearch'

export default function Home() {
  const {data} = useSession()

  data?.user

  return (
    <div>
      <TripSearch/>
      <QuickSearch/>
    </div>
  )
}
