import React, { useState, useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import TeknikBilgi from '../../assets/teknik.png'
import axiosClient from '../../utils/axiosClient'
import Loading from '../../components/loading/Loading'
function Technical() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState()
  const [open, setOpen] = useState(0)
  const getRefHandler = async () => {
    await axiosClient
      .get(`/technical-information`)
      .then(function (response) {
        setData(response.data)

        setLoading(true)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const modalHandler = (value) => {
    if (value === open) {
      setOpen(0)
    } else {
      setOpen(value)
    }
  }
  useEffect(() => {
    getRefHandler()
  }, [])
  return !loading ? (
    <Loading />
  ) : (
    <>
      <Banner image={TeknikBilgi} title="Teknik Bilgi" />
      <div className="w-full flex justify-center items-center my-24 max-sm:mt-5 flex-col">
        {data?.map((item, i) => (
          <div
            className=" flex justify-center items-center flex-col w-[50%] max-xl:w-[70%] max-md:w-[85%] max-sm:w-[95%] mt-12"
            key={i}
            onClick={() => modalHandler(item.id)}
          >
            <img
              className="w-full h-[450px] object-cover max-md:w-full cursor-pointer"
              src={item.image}
              alt="duyuru"
            />

            <div
              className={
                open != item.id
                  ? 'hidden w-full bg-[#fdab0c]  justify-center items-center flex-col px-24 py-10 max-md:w-full max-md:px-5'
                  : 'w-full bg-[#fdab0c] flex justify-center items-center flex-col px-24 py-10 max-md:w-full max-md:px-5'
              }
            >
              <p className="text-3xl font-bold max-xl:text-xl">{item.title}</p>
              <p className="text-lg font-medium text-zinc-900 mt-5 max-xl:text-sm text-center max-md:text-start">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Technical
