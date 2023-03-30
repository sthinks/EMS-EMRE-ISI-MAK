import React from 'react'
import aab from '../../assets/aa.png'
function Banner({ image, title, titleSecond }) {
  return (
    <div className="w-auto h-auto flex justify-start items-center relative">
      <div className="bg-black opacity-50 w-full h-full absolute" />
      <img
        className="w-full max-sm:h-[300px] max-sm:object-cover"
        src={image}
        alt=""
      />
      <div className="absolute border-l-4 border-l-[#fdab0c] text-white ml-28 max-md:ml-10 py-5">
        <p className="text-6xl max-xl:text-4xl max-md:text-2xl">{title}</p>
        {titleSecond && (
          <p className="text-7xl font-semibold max-xl:text-5xl max-md:text-2xl">
            {titleSecond}
          </p>
        )}
      </div>
    </div>
  )
}

export default Banner
