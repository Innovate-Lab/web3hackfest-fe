import React from 'react'
import RecentCard from './RecentCard'

const RecentArticle = () => {
  const example = new Array(6).fill(null)
  
  return (
    <div className='flex flex-col'>
      <div className='text-white text-xl'>
        Recent
      </div>
      <div className='grid grid-cols-2 gap-[48px] mt-5'>
        {example.map((e, i) => {
          return <RecentCard key={i} />
        })}
      </div>
    </div>
  )
}

export default RecentArticle
