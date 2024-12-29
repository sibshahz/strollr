import UserActivity from './user.component'
import StatusOverview from './status-overview.component'
import ActivityOverviewRecharts from './recharts/activity-overview/activity-overview.component'


const Activity = () => {
  return (
    <div className='grid grid-cols-6 items-start flex-wrap gap-5'>
      <div className='col-span-6 xl:col-span-4 flex flex-col gap-5'>
      <UserActivity />
      <StatusOverview />
      </div>
      <div className='col-span-6 xl:col-span-2'>
      <ActivityOverviewRecharts />
      </div>
    </div>
  )
}

export default Activity