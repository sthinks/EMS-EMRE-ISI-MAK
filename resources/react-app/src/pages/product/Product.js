import React, { useState, useEffect, useRef } from 'react'
import Banner from '../../components/banner/Banner'
import productBanner from '../../assets/product.png'
import axiosClient from '../../utils/axiosClient'
import Slider from 'react-slick'
import Loading from '../../components/loading/Loading'
import { AiOutlineClose } from 'react-icons/ai'
import './product.css'
import { useNavigate } from 'react-router-dom'
function Product() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [filterImage, setFilterImage] = useState()
  const [yellow, setYellow] = useState()
  const [modal, setModal] = useState(false)
  const closeScreen = useRef()
  const getProductHandler = async () => {
    await axiosClient
      .get(`/products`)
      .then(function (response) {
        setData(response.data)
        setLoading(true)
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
      if (e.target.className === 'absolute w-full h-full bg-white py-12') {
        setModal(false)
      }
    }
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])
  const filterProduct = (value) => {
    const result = data?.filter((item) => item.id === value)
    console.log(result[0].image)
    setModal(true)
    setFilterImage(result[0].image)
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const navigate = useNavigate()
  return !loading ? (
    <Loading />
  ) : (
    <>
      <Banner image={productBanner} title="Ürünler" />
      <div className="relative w-full h-auto">
        <div className="flex justify-center items-center px-36 relative w-full top-[-200px] max-lg:top-[-80px] max-md:top-0 max-md:my-10 max-xl:px-14 max-md:px-2 max-xl:relative">
          <div className="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-2">
            {data?.map((item, i) => (
              <div
                className="cursor-pointer h-auto bg-white flex justify-start items-center flex-col shadow-ems hover:scale-[1.08] transition delay-150"
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
                <div className="px-5 pt-10 pb-14">
                  <p className="text-lg font-extrabold">{item.title}</p>
                  <p className="text-base font-light mt-4 text-stone-900">
                    {item.description.slice(0, 150)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
