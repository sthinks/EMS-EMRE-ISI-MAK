import React, { useState, useEffect } from 'react'
import axiosClient from '../../utils/axiosClient'
import Loading from '../../components/loading/Loading'
import ModalImage from 'react-modal-image'
function Document() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const getRefHandler = async () => {
    await axiosClient
      .get(`/document`)
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
  return !loading ? (
    <Loading />
  ) : (
    <div className="flex justify-center items-center my-24">
      <div className="w-full px-48 max-xl:px-24 max-md:px-5">
        <div className="grid grid-cols-4 max-sm:grid-cols-2">
          {data?.map((item, i) => (
            <div
              className="w-full h-full flex justify-center items-center"
              key={i}
            >
              <ModalImage
                className="w-2/4 mx-auto"
                small={item.image}
                large={item.image}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Document
