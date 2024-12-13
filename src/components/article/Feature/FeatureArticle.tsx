import React from 'react'
import FeatureCard from './FeatureCard'

const FeatureArticle = () => {
  const example = new Array(2).fill(null)
  return (
    <div className='flex flex-col'>
      <div className='text-white text-xl'>
      Feature
      </div>
      <div className='flex gap-[48px] mt-5'>
      {example.map((e,i)=>{
        return <FeatureCard key={i}></FeatureCard>
      })}
      </div>
      
    </div>
  
  )
}

export default FeatureArticle
