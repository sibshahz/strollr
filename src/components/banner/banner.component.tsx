import React from 'react'

type Props = {
  title: string,
  subtitle: string,
  image: string,
}

const Banner:React.FC<Props> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <div className='bg-text-contrast grid grid-cols-1 lg:grid-cols-2 items-center flex-wrap rounded-2xl'>
      <div className="text-content m-8">
        <h1 
        className='font-nunito text-3xl font-extrabold text-text-primary mb-2'
        >{title}</h1>
        <h2
        className='text-lg text-text-primary'
        >{subtitle}</h2>
      </div>
      <div>
      <img src={image} alt={title} />

      </div>
    </div>
  )
}

export default Banner