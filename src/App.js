import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Home from './Components/Home';
import Services from './Components/Services';
import Internships from './Components/Internships';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import React from 'react';


const navigation = [
  { name: 'Home', href: '/', },
  { name: 'Services', href: '#services', },
  { name: 'Internships', href: '#internships' },
  { name: 'About Us', href: '#aboutus', },
  { name: 'Contact Us', href: '#contactus', },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function App() {
  return (
    <>
      <Disclosure as="nav" className="bg-blue-900 w-full">
        <div className="mx-auto max-w-full px-2 sm:px-4 lg:px-6 lg:p-2 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center text-white font-bold">
                EdTECH
              </div>
              <div className="hidden sm:ml-2 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className=
                      'text-gray-400  hover:text-white rounded-md px-3 py-2 sm:text-sm lg:text-lg font-medium text-nowrap'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      <div className='bg-transparent'>
        <div id='home'>
          <Home />
        </div>
        <div id='services'>
          <Services />
        </div>
        <div id='internships'>
          <Internships />
        </div>
        <div id='aboutus'>
          <AboutUs />
        </div>
        <div id='contactus'>
          <ContactUs />
        </div>
      </div>
      <Footer />
    </>

  )
}
