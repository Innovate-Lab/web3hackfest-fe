import React from 'react'
import RecentCard from './RecentCard'
import { ArticleData } from '../data'

const RecentArticle = () => {
  
  return (
    <div className='flex flex-col'>
      <div className='text-white text-[34px]'>
        Recent
      </div>
      <div className='grid grid-cols-2 gap-[48px] mt-5'>
        {ArticleData.map((e, i) => {
          return <RecentCard key={i} article={e} />
        })}
      </div>
    </div>
  )
}

export default RecentArticle
