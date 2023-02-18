import { Fragment } from 'react';
import Header from '../../src/Header';
import Footer from '../../src/Footer';

const decoratedInfo = () => {
  return (
    <Fragment>
      <Header />
      <div className='relative bg-gray-50'>
        <main className='lg:relative'>
          {/* Hero */}
          <div className='relative bg-gray-900'>
            {/* Decorative video and overlay */}
            <div
              aria-hidden='true'
              className='absolute inset-0 overflow-hidden'>
              <img
                className='absolute inset-0 h-full w-full object-cover'
                src='/img/decoratedImage.jpg'
                alt='Marvel Ironman Cookies'
                priority='true'
              />
            </div>
            <div
              aria-hidden='true'
              className='absolute inset-0 bg-gray-900 opacity-50'
            />

            <div className='relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0'>
              <h1 className='text-4xl font-extrabold tracking-tight text-white lg:text-5xl'>
                Expertly Designed and Deliciously Tasting Cookies for Every
                Occasion
              </h1>
            </div>
          </div>
          <div className='flex justify-center -mt-11'>
            <span className='h-24 w-24 rounded-full bg-darkBrown py-2 z-40 flex items-center justify-center'>
              <img
                className='h-16 w-16'
                src='/img/cookieIcon.png'
                alt='cupcake'
                priority='true'
              />
            </span>
          </div>
        </main>
      </div>
      <div className='mt-20'>
        <h3 className='title text-darkBrown text-center mx-14 md:mx-32'>
          <span className='border-b-2 border-solid border-b-darkBlue'>
            Decorated Cookies
          </span>
        </h3>
      </div>
      {/* Daily Specials */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Daily Specials $2.75
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Seasonal decorated cookies available in the store at this price.
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Available most days and in limited quantity.
          </p>
        </div>
      </section>
      {/* Standard */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Standard Decorated Cookies $3.25
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Baseball, tennis ball, basketball, butterfly, standard flower...
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            No Writing of Any Kind
          </p>
        </div>
      </section>

      {/* Special Designs */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Special Designs $4.50 - $5.50
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Bridal gown, baby carriages, bassinet, onesies, teddy bears, bibs,
            wedding cake shapes...
          </p>
        </div>
      </section>
      <section className='mt-20 mb-20'>
        <div>
          <div className='text-justify mx-14 md:mx-32'>
            <div className='text-center'>
              <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
                Minimum order is 12 cookies
              </p>
              <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
                We require 5 days notice for all decorated cookie orders.
              </p>
              <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
                During peak seasons lead times may be longer
              </p>
              <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
                Indivial packaging in cellophane bag is available ($1.00 each)
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default decoratedInfo;
