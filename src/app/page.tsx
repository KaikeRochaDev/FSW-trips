'use client'

import {useSession} from 'next-auth/react'
import TripSearch from './components/TripSearch'
import QuickSearch from './components/QuickSearch'
import RecommendedTrips from './components/RecommendedTrips'

export default function Home() {
  const {data} = useSession()

  data?.user

  return (
    <div>
      <TripSearch/>
      <QuickSearch/>
      <RecommendedTrips/>
    </div>
  )
}
