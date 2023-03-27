import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import axiosClient from '../../utils/axiosClient'
import BannerImage from '../../assets/referance-banner.png'
import Loading from '../../components/loading/Loading'

function Referance() {
  const [referance, setReferance] = useState()
  const [loading, setLoading] = useState(false)
  const getRefHandler = async () => {
    await axiosClient
      .get(`/bussines-partner`)
      .then(function (response) {
        setReferance(response.data)
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
    <>
      <Banner title="Referanslar" image={BannerImage} />
      <div className="flex justify-center items-center my-24">
        <div className="w-full px-48 max-xl:px-24 max-md:px-5">
          <div className="grid grid-cols-3 max-sm:grid-cols-2">
            {referance?.map((item, i) => (
              <div className="flex justify-center items-center" key={i}>
                <img src={item.image} alt="referance" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Referance
