import { useState } from 'react';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Search from '../src/components/Search';

import {
  MenuIcon,
  XIcon,
  InformationCircleIcon,
  PhotographIcon,
  CakeIcon,
  AcademicCapIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const weddings = [
  {
    name: 'Information',
    href: '/weddings/info',
    description: 'Check out our wedding cake sizes, pricing, and information.',
    icon: InformationCircleIcon,
  },
  {
    name: 'Gallery',
    href: '/weddings/gallery',
    description: 'Check out our gallery of Wedding Cakes.',
    icon: PhotographIcon,
  },
];

const cupcakes = [
  {
    name: 'Information',
    href: '/cupcakes/info',
    description: 'Check out our cupcake pricing and information.',
    icon: InformationCircleIcon,
  },
  {
    name: 'Gallery',
    href: '/cupcakes/gallery',
    description: 'Check out our gallery of cupcakes.',
    icon: PhotographIcon,
  },
];

const decoratedCookies = [
  {
    name: 'Information',
    href: '/decorated/info',
    description: 'Check out our Decorated Cookie pricing and information.',
    icon: InformationCircleIcon,
  },
  {
    name: 'Gallery',
    href: '/decorated/gallery',
    description: 'Check out our gallery of Decorated Cookies.',
    icon: PhotographIcon,
  },
];

const cakes = [
  {
    name: 'Information',
    href: '/cakes/info',
    description: 'Check out our cake pricing and information.',
    icon: InformationCircleIcon,
  },
  {
    name: 'Baby Showers/Religious',
    href: '/cakes/gallery/baby-religious',
    description:
      'Check out our gallery of religious cakes for dedications or cakes for you next baby shower.',
    icon: CakeIcon,
  },
  {
    name: 'Kids Themed Cakes',
    href: '/cakes/gallery/kids',
    description: 'Check out our gallery of cake.',
    icon: CakeIcon,
  },
  {
    name: 'Graduation',
    href: '/cakes/gallery/graduation',
    description: 'Check out our gallery of cake.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Other Party Cakes',
    href: '/cakes/gallery/other',
    description: 'Check out our gallery of cake.',
    icon: CakeIcon,
  },
];

const mobileLinks = [
  {
    name: 'Wedding Information',
    href: '/weddings/info',
    icon: InformationCircleIcon,
  },
  { name: 'Wedding Gallery', href: '/weddings/gallery', icon: PhotographIcon },
  {
    name: 'Cupcake Information',
    href: '/cupcakes/info',
    icon: InformationCircleIcon,
  },
  { name: 'Cupcake Gallery', href: '/cupcakes/gallery', icon: PhotographIcon },
  {
    name: 'Decorated Cookies Information',
    href: '/decorated/info',
    icon: InformationCircleIcon,
  },
  {
    name: 'Decorated Cookies Gallery',
    href: '/decorated/gallery',
    icon: PhotographIcon,
  },
  {
    name: 'Cakes Information',
    href: '/cakes/info',
    icon: InformationCircleIcon,
  },
  {
    name: 'Baby Showers/Religious',
    href: '/cakes/gallery/baby-religious',
    icon: CakeIcon,
  },
  {
    name: 'Kids Themed Cakes',
    href: '/cakes/gallery/kids',
    icon: CakeIcon,
  },
  {
    name: 'Graduation',
    href: '/cakes/gallery/graduation',
    icon: AcademicCapIcon,
  },
  {
    name: 'Other Party Cakes',
    href: '/cakes/other',
    icon: CakeIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = ({ products }) => {
  const toggleDropdown = () => {
    setOpen(true);
  };

  return (
    <div className='sticky top-0 z-50 bg-gray-50'>
      <Popover className='relative bg-white shadow'>
        <div className=' max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center py-6 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <a href='/'>
                <h6 className='text-lg lg:text-xl nav-title text-darkBrown hover:text-lightBrown'>
                  Heidelberg Pastry Shop
                </h6>
              </a>
            </div>

            <div className='-mr-2 -my-2 md:hidden'>
              <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>

            <Popover.Group as='nav' className='hidden md:flex space-x-10'>
              <a
                href='/'
                className='text-base font-medium text-darkBrown hover:text-lightBrown hover:border-solid hover:border-b-2 hover:border-darkBlue'>
                Home
              </a>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-darkBrown' : 'text-darkBrown',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium text-darkBrown hover:text-lightBrown'
                      )}>
                      <span>Weddings</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-darkBlue' : 'text-darkBlue',
                          'ml-2 h-5 w-5 group-hover:text-lightBlue'
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'>
                      <Popover.Panel className='absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                            {weddings.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className='-m-3 p-3 flex items-start rounded-lg hover:bg-cream'>
                                <item.icon
                                  className='flex-shrink-0 h-6 w-6 text-darkBrown'
                                  aria-hidden='true'
                                />
                                <div className='ml-4'>
                                  <p className='text-base font-medium text-black'>
                                    {item.name}
                                  </p>
                                  <p className='mt-1 text-sm text-mainGray'>
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href='/bakery'
                className='text-base font-medium text-darkBrown hover:text-lightBrown hover:border-solid hover:border-b-2 hover:border-darkBlue'>
                Bakery
              </a>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-darkBrown' : 'text-darkBrown',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium text-darkBrown hover:text-lightBrown'
                      )}>
                      <span>Cupcakes</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-darkBlue' : 'text-darkBlue',
                          'ml-2 h-5 w-5 group-hover:text-lightBlue'
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'>
                      <Popover.Panel className='absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                            {cupcakes.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className='-m-3 p-3 flex items-start rounded-lg hover:bg-cream'>
                                <item.icon
                                  className='flex-shrink-0 h-6 w-6 text-darkBrown'
                                  aria-hidden='true'
                                />
                                <div className='ml-4'>
                                  <p className='text-base font-medium text-black'>
                                    {item.name}
                                  </p>
                                  <p className='mt-1 text-sm text-mainGray'>
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-darkBrown' : 'text-darkBrown',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium text-darkBrown hover:text-lightBrown'
                      )}>
                      <span>Decorated Cookies</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-darkBlue' : 'text-darkBlue',
                          'ml-2 h-5 w-5 group-hover:text-lightBlue'
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'>
                      <Popover.Panel className='absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                            {decoratedCookies.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className='-m-3 p-3 flex items-start rounded-lg hover:bg-cream'>
                                <item.icon
                                  className='flex-shrink-0 h-6 w-6 text-darkBrown'
                                  aria-hidden='true'
                                />
                                <div className='ml-4'>
                                  <p className='text-base font-medium text-black'>
                                    {item.name}
                                  </p>
                                  <p className='mt-1 text-sm text-mainGray'>
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-darkBrown' : 'text-darkBrown',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium text-darkBrown'
                      )}>
                      <span>Cakes</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-darkBlue' : 'text-darkBlue',
                          'ml-2 h-5 w-5 group-hover:text-lightBlue'
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'>
                      <Popover.Panel className='absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                            {cakes.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className='-m-3 p-3 flex items-start rounded-lg hover:bg-cream'>
                                <item.icon
                                  className='flex-shrink-0 h-6 w-6 text-darkBrown'
                                  aria-hidden='true'
                                />
                                <div className='ml-4'>
                                  <p className='text-base font-medium text-black'>
                                    {item.name}
                                  </p>
                                  <p className='mt-1 text-sm text-mainGray'>
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {/* {session && (
                <>
                  <a
                    href='/dashboard'
                    className='text-base font-medium text-darkBrown hover:text-lightBrown hover:border-solid hover:border-b-2 hover:border-darkBlue'>
                    Dashboard
                  </a>
                  <a
                    onClick={() => signOut()}
                    className='text-base font-medium text-darkBrown hover:text-lightBrown hover:border-solid hover:border-b-2 hover:border-darkBlue cursor-pointer'>
                    Logout
                  </a>
                </>
              )} */}
            </Popover.Group>
            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              <Search />
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          <Popover.Panel
            focus
            className='absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <h6 className='text-xl nav-title text-darkBrown hover:text-lightBrown'>
                      Heidelberg Pastry Shop
                    </h6>
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-darkBlue hover:text-lightBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkBlue'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-6'>
                    {mobileLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-m-3 p-3 flex items-center rounded-md hover:bg-cream'>
                        <item.icon
                          className='flex-shrink-0 h-6 w-6 text-darkBlue'
                          aria-hidden='true'
                        />
                        <span className='ml-3 text-base font-medium text-gray-900'>
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Header;
