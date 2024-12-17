"use client"
import InputComponent from '@/components/signup/InputComponent'
import React, { useState } from 'react'

const page = () => {
    const [email,setEmail] = useState<string>("")
  return (
    // <div classNameName="backdrop-blur-lg bg-[rgba(78,78,78,0.2)] rounded-lg p-4 w-[400px] h-[438px]">
      
    // </div>
    <div className='flex flex-col gap-8 justify-center items-center'>
        <div className='text-white text-[45px] text-center'>Nhập mail đặt lại mật khẩu</div>
    <div className="backdrop-blur-lg bg-[rgba(78,78,78,0.2)] rounded-lg px-8 py-6 w-[536px]  ">    
    <form action="#" method="POST">
  

      <InputComponent setValue={setEmail} value={email} title='Email'/>

      <button 
        type="submit" 
        className="w-full bg-[#358FCE] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      >
        Gửi lại mã đặt mật khẩu
      </button>

  
    </form>
  </div>
  </div>

  )
}

export default page
