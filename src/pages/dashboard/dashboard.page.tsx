import React from 'react'
import Banner from '../../components/banner/banner.component'
import Activity from '../../components/activity/activity.component'
import AccountBar from '../../components/account-bar/account-bar.component'

const bannerData = {
  title: 'Hi, John Doe!',
  subtitle: "Let's pick up where we left off and keep the momentum going.",
  image: '/remove_bg_characters.png',
}

const DashboardPage: React.FC = () => {
  return (
    <div className='flex flex-col gap-10'>
      <AccountBar />
      <Banner {...bannerData} />
      <Activity />
    </div>
  )
}

export default DashboardPage