import React from 'react'
import PieChartComponent from './pie-chart.component'
import ActivityBarComponent from './activity-bar.component'


const ActivityOverviewRecharts = () => {
  return (
    <div className='bg-text-contrast rounded-2xl py-7 px-5 w-full'>
      <div className="pie-container h-64">
      <h5 className='text-lg font-bold text-text-primary tracking-wide'>Activity Performance Overview</h5>
      <PieChartComponent />
      </div>
      <div className='activity-container mt-8'>
        <ActivityBarComponent />
      </div>
    </div>
  )
}

export default ActivityOverviewRecharts