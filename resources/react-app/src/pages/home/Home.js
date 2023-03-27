import React, { useEffect, useState } from 'react'
import Banner from '../../components/banner/Banner'
import pImg from '../../assets/fırın.png'
import fırın from '../../assets/fırın2.png'
import Kurumsal from '../../assets/home-copryt.png'
import ReactPlayer from 'react-player'
import axiosClient from '../../utils/axiosClient'
import BannerImg from '../../assets/aa.png'
import Loading from '../../components/loading/Loading'
import { useNavigate } from 'react-router-dom'
function Home() {
  const [referance, setReferance] = useState([])
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [yellow, setYellow] = useState()
  const getRefHandler = async () => {
    await axiosClient
      .get(`/referance`)
      .then(function (response) {
        setReferance(response.data)
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const getProductHandler = async () => {
    await axiosClient
      .get(`/products`)
      .then(function (response) {
        setProduct(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  useEffect(() => {
    getRefHandler()
    getProductHandler()
  }, [])
  const navigate = useNavigate()
  return loading ? (
    <Loading />
  ) : (
    <div>
      <Banner
        image={BannerImg}
        title="Kurumsal Ekip Profesyonel Çözüm"
        titleSecond="EMS EMRE ISI MAKİNALARI"
      />
      <div className="relative w-full h-auto">
        <div className="flex justify-center items-center px-36 relative w-full top-[-200px] max-lg:top-[-80px] max-md:top-0 max-md:my-10 max-xl:px-14 max-md:px-2 max-xl:relative">
          <div className="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-2">
            {product?.map((item, i) => (
              <div
                key={i}
                className="relative cursor-pointer h-auto bg-white flex justify-start items-center flex-col shadow-ems hover:scale-[1.08] transition delay-150"
                onClick={() => navigate(`/ürünler/${item.slug}`)}
                onMouseEnter={() => setYellow(item.id)}
                onMouseLeave={() => setYellow()}
              >
                <img
                  className="object-cover h-96  w-full"
                  src={item.image[0]}
                  alt="ürün"
                />
                <div
                  className={
                    yellow === item.id
                      ? 'absolute bg-[#fdab0c] opacity-30 w-full h-96'
                      : 'hidden absolute bg-[#fdab0c] opacity-30 w-full h-96'
                  }
                />
                <div className="px-5 pt-10 pb-14 ">
                  <p className="text-xl font-extrabold">{item.title}</p>
                  <p className="text-base font-light mt-4 text-stone-600">
                    {item.description.slice(0, 150)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-4xl font-bold">KURUMSAL</p>
        <div
          className="mt-5 w-full h-auto relative flex justify-center items-center"
          style={{ backgroundImage: `url(${Kurumsal})` }}
        >
          <div className="z-50 grid grid-cols-3 px-48 py-28 gap-28 max-xl:py-24 max-xl:px-14 max-md:py-4 max-md:gap-14 max-sm:grid-cols-1">
            <div>
              <p className="text-2xl font-bold">HAKKIMIZDA</p>
              <p className=" text-sm font-normal my-10">
                Firmamız EMS EMRE ISI MAKİNALARI İMALAT SAN. TİC. LTD. ŞTİ.
                olarak 1991 senesinden beri ENDÜSTRİYEL FIRIN İMALATI alanında
                faaliyet göstermektedir.
              </p>
              <a
                className="border-b-2 border-red-500 cursor-pointer hover:border-b-4"
                href="/kurumsal"
              >
                DETAYLI BİLGİ
              </a>
            </div>

            <div>
              <p className="text-2xl font-bold">MİSYON VE VİZYONUMUZ</p>
              <p className="text-sm font-normal my-10">
                Farklılıklar yaratarak dünya kalite ve standartları üzerinde
                ürün ve hizmet sunarak kalıcı üstünlükler sağlamak.
              </p>
              <a
                className="border-b-2 border-red-500 cursor-pointer hover:border-b-4"
                href="/kurumsal"
              >
                DETAYLI BİLGİ
              </a>
            </div>

            <div>
              <p className="text-2xl font-bold">İŞ ORTAKLARIMIZ</p>
              <p className="my-10"></p>
              <a
                className="border-b-2 border-red-500 cursor-pointer my-10 hover:border-b-4 "
                href="/referanslar"
              >
                DETAYLI BİLGİ
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full my-24">
        <ReactPlayer
          width="100%"
          height="100vh"
          url="https://youtu.be/7UQMHAtrcMs"
        />
      </div>
      <div className="w-full flex justify-center items-center flex-col mb-20">
        <p className="text-4xl font-bold text-[#fea700]">REFERANSLAR</p>
        <p className="my-5">Türkiye ve Dünya pazarındaki iş ortaklarımız</p>
        <div className="w-full grid grid-cols-8 max-xl:grid-cols-4  px-48 max-xl:px-24 max-md:grid-cols-2 max-md:px-5">
          {referance.map((item, i) => (
            <div className="p-5" key={i}>
              <img className="w-full" src={item.image} alt="ref" />
            </div>
          ))}
        </div>
        <a
          className="mt-24 text-xl font-normal border-b-2 border-orange-200 cursor-pointer hover:scale-125 transition delay-150"
          href="/referanslar"
        >
          Tüm Referanslar
        </a>
      </div>
    </div>
  )
}

export default Home
