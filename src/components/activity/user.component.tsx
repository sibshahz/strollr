import React from 'react'

type ActivityProps = {
  title: string,
  total: string,
  image: string,
}

const SingleActivity:React.FC<ActivityProps> = ({
  title,
  total,
  image,
}) => {
  return (
    <div className='flex flex-row items-center gap-5 px-5 py-7 flex-wrap rounded-2xl bg-text-contrast w-full justify-center xl:justify-start'>
      <div>
        <img src={image} alt={title} width={56} height={56} />
      </div>
      <div className='flex flex-col justify-between flex-wrap'>
        <h1
        className='font-nunito text-sm font-extrabold text-text-primary tracking-wider'
        >{title}</h1>
        <h2
        className='font-nunito text-2xl font-black text-text-primary tracking-wider'
        >{total}</h2>
      </div>
    </div>
  )
}


const UserActivity = () => {
  return (
    <div className='flex flex-row gap-5 width-full'>
      <SingleActivity title='Active Users' total='136' image='/active.png' />
      <SingleActivity title='Venues' total='136' image='/venues.png' />
      <SingleActivity title='Activities' total='136' image='/activities.png' />
    </div>
  )
}

export default UserActivity