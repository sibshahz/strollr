import React from 'react'
import { UserStatusOverviewRecharts } from './recharts/status-overview/status-overview.component'

const StatusOverview = () => {
  return (
    <>
    <div
    className='bg-text-contrast rounded-2xl p-5 w-full'
    >

    <UserStatusOverviewRecharts />

    </div>
</>
  )
}

export default StatusOverview