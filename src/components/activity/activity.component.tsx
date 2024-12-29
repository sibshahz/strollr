import React from 'react'
import UserActivity from './user.component'
import StatusOverview from './status-overview.component'
import { ActivityOverview } from './activity-chart/activity-overview.component'


const Activity = () => {
  return (
    <div className='grid grid-cols-6 items-start flex-wrap gap-5'>
      <div className='col-span-6 xl:col-span-4 flex flex-col gap-5'>
      <UserActivity />
      <StatusOverview />
      </div>
<ActivityOverview />
    </div>
  )
}

export default Activity