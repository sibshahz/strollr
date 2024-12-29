import React from 'react'
import { UserStatusOverview } from './status-chart/user-status-overview.component'

const StatusOverview = () => {
  return (
    <>
    <div
    className='bg-text-contrast rounded-2xl p-5 w-full'
    >

    <UserStatusOverview />

    </div>
</>
  )
}

export default StatusOverview