import React from 'react'

function NotFound() {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="w-full h-[500px] px-24 relative flex justify-center items-center max-md:px-3">
        <div className="bg-[#fdab0c] w-full h-full opacity-80" />
        <p className="text-3xl font-bold absolute max-md:px-5">
          Aradığınız sayfa bulunamadı
        </p>
      </div>
    </div>
  )
}

export default NotFound
