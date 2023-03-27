import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import DuyuruImg from '../../assets/duyurular.png'
import axiosClient from '../../utils/axiosClient'
import Loading from '../../components/loading/Loading'
function Announcement() {
  const [data, setData] = useState()
  const [open, setOpen] = useState(0)
  const [loading, setLoading] = useState(false)
  const getRefHandler = async () => {
    await axiosClient
      .get(`/announcement`)
      .then(function (response) {
        setData(response.data)
        setLoading(true)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getRefHandler()
  }, [])
  const modalHandler = (value) => {
    if (value === open) {
      setOpen(0)
    } else {
      setOpen(value)
    }
  }
  return !loading ? (
    <Loading />
  ) : (
    <>
      <Banner image={DuyuruImg} title="Duyurular" />
      <div className="w-full flex justify-start items-center my-24 max-sm:mt-5">
        <div className="w-full px-48 max-xl:px-24 max-md:px-10 max-sm:px-2">
          {data?.map((item, i) => (
            <div
              className="relative flex justify-start items-center w-[85%] max-xl:w-full my-10 h-[350px] max-md:flex-col max-md:h-auto max-md:mt-5"
              key={i}
            >
              <img
                className="w-4/6 h-[350px] object-cover max-md:w-full cursor-pointer"
                onClick={() => modalHandler(item.id)}
                src={item.image}
                alt="duyuru"
              />
              <div
                onClick={() => modalHandler(item.id)}
                className={
                  open === item.id
                    ? 'hidden w-4/6 h-[350px] object-cover max-md:w-full'
                    : 'w-4/6 h-[350px] object-cover max-md:w-full absolute bg-[#fdab0c] opacity-50 cursor-pointer'
                }
              />
              <div
                className={
                  open === item.id
                    ? ' w-2/6 h-full bg-[#fdab0c] flex justify-center items-center flex-col p-10 max-md:w-full'
                    : 'hidden w-2/6 h-full bg-[#fdab0c]  justify-center items-center flex-col p-10 max-md:w-full'
                }
              >
                <p className="text-3xl font-bold max-xl:text-xl">
                  {item.title}
                </p>
                <p className="text-lg font-medium text-zinc-900 mt-5 max-xl:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Announcement
