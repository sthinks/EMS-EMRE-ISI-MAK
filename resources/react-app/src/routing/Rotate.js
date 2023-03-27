import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Loading from '../components/loading/Loading'
import NotFound from '../pages/404/NotFound'
import About from '../pages/about-us/About'
import Announcement from '../pages/annoucement/Announcement'
import Catalog from '../pages/catalog/Catalog'
import Contact from '../pages/contact/Contact'
import Document from '../pages/document/Document'
import Home from '../pages/home/Home'
import Product from '../pages/product/Product'
import Referance from '../pages/referance/Referance'
import Technical from '../pages/technical/Technical'
import ProductDetail from '../pages/productDetail/ProductDetail'
import Bussines from '../pages/bussinesPartner/Bussines'

function Rotate() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/referanslar" element={<Referance />} />
        <Route path="/duyurular" element={<Announcement />} />
        <Route path="/teknik-bilgi" element={<Technical />} />
        <Route path="/kurumsal" element={<About />} />
        <Route path="/ürünler" element={<Product />} />
        <Route path="/ürünler/:slug" element={<ProductDetail />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/e-katalog" element={<Catalog />} />
        <Route path="/kalite-ve-belgeler" element={<Document />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Rotate
