'use client'

import {useSession} from 'next-auth/react'

export default function Home() {
  const {data} = useSession()

  data?.user

  return (
    <div className='bg-primaryDarker'>
    </div>
  )
}
