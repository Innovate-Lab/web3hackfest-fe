import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center text-[#E4E4E6] w-full min-h-screen gap-8'>
      <div className='flex flex-col text-center w-[60%]'>
        <div className='text-[45px] text-center'>Đăng ký thành công!</div>
        <span>Chúng tôi rất vui mừng được đồng hành cùng bạn trong hành trình của cuộc thi Web3 & AI Ideathon và các hoạt động khác trong chuỗi sự kiện Web3 HackFest</span>

      </div>
      <div className='px-8 py-6 text-white flex flex-col rounded-lg backdrop-blur-lg bg-[rgba(78,78,78,0.2)] w-[40%] gap-4'>
        <span className='text-[24px] text-center'>Các bước đăng ký tiếp theo</span>
        <div className='flex flex-col'>
            <span>Bước 1: Vui lòng kiểm tra email xác nhận tham gia cuộc thi</span>
            <span>Bước 2: Tham gia nhóm Zalo để cập nhật thông tin mới nhất từ cuộc thi Web3 & AI Ideathon và các hoạt động khác của Web3 HackFest</span>
        </div>
        <div className='flex flex-col'>
            <span>Lưu ý: Cổng nộp bài dự thi sẽ được đóng vào lúc 23:59 17/01/2025. </span>
            <span>Vui lòng nộp bài trước thời gian này.</span>
        </div>
        <div className='flex flex-col items-center w-full'>
            <img src="https://framerusercontent.com/images/8zAny8QlBvTwhRCTHfg6LjOQ7E8.png?scale-down-to=512" alt=""  className='w-[162px] h-[170px]'/>
            <span>Nhóm hỗ trợ web3hackfest</span>
            <a href="https://zalo.me/g/jyjuaa013" target="_blank" rel="noopener">https://zalo.me/g/jyjuaa013</a>
        </div>
      </div>
      <div className='bg-primary px-4 py-3 text-white rounded-xl'>Trở về trang Đăng nhập</div>
    </div>
  )
}

export default page
