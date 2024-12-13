import React from 'react'

const FooterArticle = () => {
  return (
    <footer className="bg-gradient-to-r  text-white py-8">
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex flex-col items-center lg:items-start">
        <div className="text-2xl font-bold">WEB3HACKFEST</div>
        <p className="text-sm mt-2">Chuỗi sự kiện công nghệ & nhà phát triển web3 lớn nhất Đông Nam Á</p>
        <div className="flex gap-4 mt-4">
          <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
          <a href="https://linkedin.com" className="hover:text-gray-400">LinkedIn</a>
          <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-end mt-6 lg:mt-0">
        <p className="text-lg font-semibold">Tham gia group Zalo để được hỗ trợ:</p>
        <p className="text-xl font-semibold mt-2">Web3 HackFest 2025 - AI Convergence</p>
        <img src="/path-to-qr-code.png" alt="Zalo QR Code" className="mt-4 w-32 h-32" />
      </div>
    </div>
    <div className="text-center mt-8 text-sm">
      <p>&#169; 2024 All Rights Reserved</p>
    </div>
  </footer>
  )
}

export default FooterArticle
