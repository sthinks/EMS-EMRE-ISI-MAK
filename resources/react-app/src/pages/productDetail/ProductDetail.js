import React, { useState, useEffect, useRef } from 'react'
import Banner from '../../components/banner/Banner'
import productBanner from '../../assets/product.png'
import axiosClient from '../../utils/axiosClient'
import Slider from 'react-slick'
import Loading from '../../components/loading/Loading'
import { AiOutlineClose } from 'react-icons/ai'
import './product.css'
import { useParams } from 'react-router-dom'
function ProductDetail() {
  const slug = useParams()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [filterImage, setFilterImage] = useState()
  const [modal, setModal] = useState(false)
  const closeScreen = useRef()
  const getProductHandler = async () => {
    await axiosClient
      .get(`/product-detail/${slug.slug}`)
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
    getProductHandler()
  }, [])
  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.target.className ===
        'absolute w-full h-full bg-black opacity-30  py-12'
      ) {
        setModal(false)
      } else if (e.target.className === 'slick-list') {
        setModal(false)
      } else if (
        e.target.className ===
        'absolute flex justify-center items-center w-full z-50 top-[100px]'
      ) {
        setModal(false)
      }
    }
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])
  const filterProduct = (value) => {
    setModal(true)
    setFilterImage(data.image)
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return !loading ? (
    <Loading />
  ) : (
    <>
      {modal && (
        <div className="absolute w-full h-full top-0 left-0 z-40">
          <div className="absolute w-full h-full bg-black opacity-30  py-12" />
        </div>
      )}
      <>
        <Banner image={productBanner} title={data.title} />
        {modal && (
          <div
            ref={closeScreen}
            className="absolute flex justify-center items-center w-full z-50 top-[100px]"
          >
            <div
              className="max-xl:hidden absolute top-[40%] right-[20%] bg-white rounded-lg cursor-pointer hover:bg-slate-300 border-2 border-slate-900"
              onClick={() => setModal(false)}
            >
              <AiOutlineClose className="text-3xl" />
            </div>
            <Slider
              className="w-[45%] max-xl:w-[75%] max-md:w-[85%] mt-24"
              {...settings}
            >
              {filterImage.map((data, i) => (
                <img src={data} alt="product" />
              ))}
            </Slider>
          </div>
        )}
        <div className="w-full flex justify-center items-center my-24 max-md:my-10">
          <div className="w-full px-48 max-xl:px-24 max-lg:px-8 max-sm:px-1">
            <div className="flex justify-center items-center my-12 w-11/12 max-2xl:w-full max-sm:flex-col">
              <div className="w-1/4 max-2xl:w-full cursor-pointer">
                <img
                  className="w-full h-72 object-cover"
                  onClick={() => filterProduct(data.id)}
                  src={data?.image[0]}
                  alt="Product"
                />
              </div>
              <div className="w-3/4 max-2xl:w-full min-h-[400px] flex justify-center items-start flex-col shadow shadow-neutral-300 px-14 cursor-pointer max-sm:py-5 max-md:px-5">
                <p className="text-xl font-bold">{data.title}</p>
                <p className="text-base font-medium text-stone-900 my-1">
                  {data.description}
                </p>
                <p className="text-lg font-bold text-[#ffa800]">Prosesler:</p>
                <p
                  className="text-base font-medium text-stone-900 my-1"
                  dangerouslySetInnerHTML={{ __html: data.process }}
                />
                <p className="text-lg font-bold text-[#ffa800]">
                  Teknik Özellikler
                </p>
                <p
                  className="text-base font-medium text-stone-900 my-1"
                  dangerouslySetInnerHTML={{ __html: data.technical_info }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default ProductDetail
