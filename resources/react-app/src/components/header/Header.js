import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Logo from '../../assets/header/logo.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const slug = window.location.pathname

  const navigation = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Ürünler', href: '/ürünler' },
    { name: 'Kurumsal', href: '/kurumsal' },
    { name: 'Referanslar', href: '/referanslar' },
    { name: 'Teknik Bilgi', href: '/teknik-bilgi' },
    { name: 'Duyurular', href: '/duyurular' },
    { name: 'İletişim', href: '/iletisim' },
    { name: 'E-Katalog', href: '/e-katalog' },
    { name: 'Kalite ve Belgeler', href: '/kalite-ve-belgeler' },
  ]

  return (
    <Disclosure
      as="nav"
      className={`${
        slug != '/'
          ? ' bg-white'
          : 'sm:bg-[#ffffff82] sm:top-0 z-50 w-full bg-[#fdab0c]'
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2   max-xl:mx-0 max-xl:px-0 ">
            <div className="relative flex sm:h-20 h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden justify-between w-full px-6">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center border-2 border-slate-900 rounded-md p-2 text-slate-700 ring-2 ring-inset ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-slate-700"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-slate-700 text"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
                <a href="/">
                  <img className="block lg:hidden h-12" src={Logo} alt="Logo" />
                </a>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-around text-[#191919] font-semibold w-full">
                <div className="hidden sm:ml-6 sm:block w-[85%] max-xl:w-full">
                  <div className="flex justify-around items-center max-xl:text-sm">
                    <div className="flex flex-shrink-0 items-center max-xl:w-32">
                      <a href="/">
                        <img
                          className="block w-auto lg:hidden"
                          src={Logo}
                          alt="Logo"
                        />
                      </a>
                      <a href="/">
                        <img
                          className="hidden w-auto lg:block"
                          src={Logo}
                          alt="Your Company"
                        />
                      </a>
                    </div>
                    <a className="text-base font-light" href="/">
                      Anasayfa
                    </a>
                    <a className="text-base font-light" href="/ürünler">
                      Ürünler
                    </a>
                    <a className="text-base font-light" href="/kurumsal">
                      Kurumsal
                    </a>
                    <a className="text-base font-light" href="/referanslar">
                      Referanslar
                    </a>
                    <a className="text-base font-light" href="/teknik-bilgi">
                      Teknik Bilgi
                    </a>
                    <a className="text-base font-light" href="/duyurular">
                      Duyurular
                    </a>
                    <a className="text-base font-light" href="/iletisim">
                      İletişim
                    </a>
                    <div className="mx-3">
                      <a
                        className="mx-1 shadow rounded-sm p-1 hover:shadow-xl transition duration-150 text-base font-light"
                        href="/e-katalog"
                      >
                        E-Katalog
                      </a>
                      <a
                        className="mx-1 shadow rounded-sm p-1 hover:shadow-xl transition duration-150 text-base font-light"
                        href="/kalite-ve-belgeler"
                      >
                        Kalite ve Belgeler
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-slate-700 font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
