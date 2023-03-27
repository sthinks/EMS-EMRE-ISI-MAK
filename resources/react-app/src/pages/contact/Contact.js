import React, { useState } from 'react'
import Banner from '../../components/banner/Banner'
import ContactImg from '../../assets/contact.png'
import formBackground from '../../assets/conctact-bg.png'
import formBg from '../../assets/form-bg.png'
import { useFormik } from 'formik'
import axiosClient from '../../utils/axiosClient'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import adress from '../../assets/adress.png'
import mail from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import worktime from '../../assets/worktime.png'
import * as Yup from 'yup'
function Contact() {
  const [loading, setLoading] = useState(false)
  const notify = () => toast('Form başarıyla gönderildi.')
  const notifyError = () => toast('Form gönderilirken hata oluştu.')
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().min(2).required('Zorunlu alan'),
      lastname: Yup.string().min(2).required('Zorunlu alan'),
      phone: Yup.string().min(2).required('Zorunlu alan'),
      subject: Yup.string(5).required('Zorunlu alan'),
      message: Yup.string(5).required('Zorunlu alan'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const result = await axiosClient.post('/contact', values)
        console.log(result)
        notify()
        resetForm()
      } catch (error) {
        console.log(error)
        notifyError()
      }
    },
  })
  return (
    <>
      <Banner image={ContactImg} title={'İletişim'} />
      <ToastContainer />
      <div className="mt-24 flex justify-center items-center w-full max-md:mt-6">
        <div
          className="w-full h-[700px] flex justify-center items-center relative"
          style={{ backgroundImage: `url(${formBackground})` }}
        >
          <div className="bg-[#fdab0c] w-full h-full absolute opacity-20" />
          <div className="w-[60%] h-[65%] max-sm:h-[80%] max-xl:w-[80%] max-md:w-[95%] flex justify-center items-center flex-col backdrop-blur-md bg-white/30 rounded-xl relative">
            <div
              className="w-full h-full rounded-xl absolute"
              style={{ backgroundImage: `url(${formBg})` }}
            />
            <p className="my-5 text-white text-lg font-normal z-50 text-center">
              EMS EMRE ISI ENDÜSTRİ MAKİNALARI SAN.VE TİC.A.Ş
            </p>

            <form
              onSubmit={formik.handleSubmit}
              className="flex justify-center items-center flex-col w-full px-28 z-50 max-lg:px-3"
            >
              <div className="flex justify-around items-center w-full max-sm:flex-col">
                <input
                  className={
                    formik.touched.firstname && formik.errors.firstname
                      ? 'w-2/6 max-sm:w-5/6 h-10 backdrop-grayscale-0 bg-white/40 placeholder:text-white rounded px-10 m-2 border-2 border-red-500  max-sm:px-2'
                      : 'w-2/6 max-sm:w-5/6  h-10 backdrop-grayscale-0 bg-white/30 placeholder:text-white rounded px-10 m-2 max-sm:px-2'
                  }
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Ad:"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                  required
                />
                <input
                  className={
                    formik.touched.lastname && formik.errors.lastname
                      ? 'w-2/6 max-sm:w-5/6 h-10 backdrop-grayscale-0 bg-white/30 placeholder:text-white rounded px-10 m-2 border-2 border-red-500  max-sm:px-2'
                      : 'w-2/6 max-sm:w-5/6 h-10 backdrop-grayscale-0 bg-white/30 placeholder:text-white  rounded px-10 m-2  max-sm:px-2'
                  }
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Soyad:"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  required
                />
              </div>
              <div className="flex justify-around items-center w-full max-sm:flex-col">
                <input
                  className={
                    formik.touched.phone && formik.errors.phone
                      ? 'w-2/6 max-sm:w-5/6 h-10 backdrop-grayscale-0 bg-white/30 placeholder:text-white rounded px-10 m-2 border-2 border-red-500  max-sm:px-2'
                      : 'w-2/6 max-sm:w-5/6 h-10 backdrop-grayscale-0 bg-white/30 placeholder:text-white rounded px-10 m-2  max-sm:px-2'
                  }
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Telefon:"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  required
                />
                <input
                  className={
                    formik.touched.subject && formik.errors.subject
                      ? 'w-2/6 max-sm:w-5/6 h-10 backdrop-grayscale-0 bg-white/30  placeholder:text-white rounded px-10 m-2 border-2 border-red-500  max-sm:px-2'
                      : 'w-2/6 max-sm:w-5/6 h-10 backdrop-grayscale-0 bg-white/30 placeholder:text-white  rounded px-10 m-2  max-sm:px-2'
                  }
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Konu:"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  required
                />
              </div>

              <textarea
                className={
                  formik.touched.message && formik.errors.message
                    ? 'resize-none w-5/6  h-44 backdrop-grayscale-0 placeholder:text-white bg-white/30  rounded p-10 m-2 border-2 border-red-500  max-sm:px-2'
                    : 'resize-none w-5/6  h-44 backdrop-grayscale-0 placeholder:text-white bg-white/30   rounded p-10 m-2  max-sm:px-2'
                }
                id="message"
                name="message"
                type="textarea"
                placeholder="Mesaj:"
                onChange={formik.handleChange}
                value={formik.values.message}
                required
              />
              <div className="w-5/6 flex justify-start">
                <button
                  className="w-36 h-10 backdrop-blur-md  bg-white/30 rounded text-white text-base font-semibold"
                  type="submit"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center items-center w-full px-24 max-xl:px-10 max-lg:px-2">
        <div className="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="flex justify-start items-center flex-col px-16 max-sm:mt-5 max-sm:px-3">
            <div className="w-full flex justify-start items-start max-sm:justify-center">
              <img src={adress} alt="adress" />
            </div>
            <p className="w-full text-4xl text-[#fdab0c] font-bold my-3 max-sm:text-center">
              Adres
            </p>
            <p className="text-base font-normal max-sm:text-center">
              Köseler Mahallesi, Mermerciler Sanayi Sitesi 23. Sokak No:11,
              41455 Dilovası/Kocaeli
            </p>
          </div>
          <div className="flex justify-start items-center flex-col px-16 max-sm:mt-5 max-sm:px-3">
            <div className="w-full flex justify-start items-start max-sm:justify-center">
              <img src={phone} alt="adress" />
            </div>
            <p className="w-full text-4xl text-[#fdab0c] font-bold my-3 max-sm:text-center">
              Telefon
            </p>
            <div className="w-full text-base font-normal max-sm:text-center">
              <p>0262 502 30 82-84</p>
              <p>0262 502 30 83</p>
              <p>0262 502 3023(pbx)</p>
            </div>
          </div>
          <div className="flex justify-start items-center flex-col px-16 max-sm:mt-5 max-sm:px-3">
            <div className="w-full flex justify-start items-start max-sm:justify-center">
              <img src={mail} alt="adress" />
            </div>
            <p className="w-full text-4xl text-[#fdab0c] font-bold my-3 max-sm:text-center">
              Email
            </p>
            <p className="w-full text-base font-normal max-sm:text-center">
              info@emremakina.com.tr
            </p>
          </div>
          <div className="flex justify-start items-center flex-col px-16 max-sm:mt-5 max-sm:px-3">
            <div className="w-full flex justify-start items-start max-sm:justify-center">
              <img src={worktime} alt="adress" />
            </div>
            <p className="w-full text-4xl text-[#fdab0c] font-bold my-3 max-sm:text-center">
              Çalışma Saati
            </p>
            <p className="w-full text-base font-normal max-sm:text-center">
              Hafta içi : 09:00 & 17:30
            </p>
          </div>
        </div>
      </div>
      <div className="w-full my-32">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.8479943868674!2d29.566628621201446!3d40.87520993555104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa59adbda3cb1%3A0x73838a715550f294!2sEMS%20Emre%20Is%C4%B1%20End%C3%BCstri%20Makinalar%C4%B1%20San.%20ve%20Tic.%20A.%C5%9E.!5e0!3m2!1str!2str!4v1679574921439!5m2!1str!2str"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  )
}

export default Contact
