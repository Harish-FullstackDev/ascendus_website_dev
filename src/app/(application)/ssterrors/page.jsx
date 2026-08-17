import Brokenlink from '@/components/sstErrorPage/Brokenlink'
import Errors from '@/components/sstErrorPage/Errors'
import OppsPage from '@/components/sstErrorPage/OppsPage'
import SessionExpired from '@/components/sstErrorPage/SessionExpired'
import React from 'react'

const page = () => {
  return (
    <div>
      <SessionExpired />
      <OppsPage />
      <Brokenlink />
    </div>
  )
}

export default page
