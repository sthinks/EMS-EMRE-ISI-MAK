import React, { useEffect, useState } from 'react'
import Loading from '../../components/loading/Loading'
import axiosClient from '../../utils/axiosClient'
function Catalog() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const getRefHandler = async () => {
    await axiosClient
      .get(`/catalog`)
      .then(function (response) {
        setData(response.data)
        setLoading(true)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getRefHandler()
  }, [])
  return !loading ? (
    <Loading />
  ) : (
    <>
      <div className="flex justify-center items-center my-24">
        <div className="w-full px-48 max-xl:px-24 max-md:px-5">
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 ">
            {data?.map((item, i) => (
              <a
                className="relative"
                href={item.file[0].download_link}
                target="blank"
              >
                <div className="w-full h-full ">
                  <img
                    className="w-full transition duration-300 ease-in-out hover:scale-110"
                    src={item.image}
                    alt="catalog"
                  />
                  <p className="absolute bottom-0 w-full h-12 bg-[#0000008a] text-white text-xl font-bold text-center">
                    {item.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalog
