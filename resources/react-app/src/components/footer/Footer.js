import React, { useEffect, useState } from 'react'

import footer from '../../assets/footerimg.png'
import Logo from '../../assets/header/logo.png'
import axiosClient from '../../utils/axiosClient'
const Footer = () => {
  const [data, setData] = useState()
  const getProductHandler = async () => {
    await axiosClient
      .get(`/products`)
      .then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getProductHandler()
  }, [])
  return (
    <footer
      className="py-24 h-auto"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="px-32  max-xl:px-3">
        <div>
          <img src={Logo} alt="Footer-Logo" />
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 w-full mt-16">
          <div className="">
            <p className="text-3xl font-bold my-3">Emre Makina</p>
            <ul>
              <li>
                <a href="/Kurumsal">Hakkımızda</a>
              </li>
              <li>
                <a href="/Kurumsal">Misyonumuz</a>
              </li>
              <li>
                <a href="/Kurumsal">Vizyonumuz</a>
              </li>
              <li>
                <a href="/referanslar">İş Ortaklarımız</a>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-3xl font-bold my-3">Kategoriler</p>
            <ul>
              {data?.map((item, i) => (
                <li>
                  <a href={`/ürünler/${item.slug}`}> {item.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <p className="text-3xl font-bold my-3">Çalışma Saatleri</p>
            <ul>
              <li>Hafta içi : 09:00 & 17:30</li>
              <li>Cumartesi: ----</li>
              <li>Pazar: ----</li>
            </ul>
          </div>
          <div className="">
            <p className="text-3xl font-bold my-3">İletişime Geçin</p>
            <ul>
              <li>
                Köseler Mahallesi, Mermerciler Sanayi Sitesi 23. Sokak No:11,
                41455 Dilovası/Kocaeli
              </li>
              <li>
                <a href="tel:+02625023082">0 262 502 30 82-84</a>
              </li>
              <li className="break-words">
                <a href="mailto:info@emremakina.com.tr">
                  info@emremakina.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
