import { Fragment } from 'react';
import Image from 'next/image';
import storyImage from '../public/img/storyImage.jpg';
import bakeryImage from '../public/img/bakeryImage.jpg';
import cakesMain from '../public/img/cakesMain.jpg';
import weddingMain from '../public/img/indexWedding1.jpeg';
import Header from '../src/Header';
import Footer from '../src/Footer';

const Home = () => {
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
              <video
                className='w-full h-full object-center object-cover'
                autoPlay
                muted
                loop>
                <source src='/img/heroVideo.mp4' type='video/mp4' />
                Your browser is not supported!
              </video>
            </div>
            <div
              aria-hidden='true'
              className='absolute inset-0 bg-gray-900 opacity-50'
            />

            <div className='relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0'>
              <h1 className='text-4xl font-extrabold tracking-tight text-white lg:text-5xl'>
                Made to Order Cakes and Fresh Pastries Baked Daily
              </h1>

              <a
                href='/bakery'
                className='mt-8 inline-block bg-darkBlue border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-lightBlue'>
                View Our Selection
              </a>
            </div>
          </div>
          <div className='flex justify-center -mt-11'>
            <span className='h-24 w-24 rounded-full bg-darkBrown py-2 z-40 flex items-center justify-center'>
              <img
                className='h-16 w-16'
                src='/img/bakery.png'
                alt='cupcake'
                priority='true'
              />
            </span>
          </div>
          <section id='indexContent' className='mb-20'>
            {/* Our story */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-2 mt-24'>
              <div>
                <h3 className='title text-darkBrown text-center'>
                  <span className='border-b-2 border-solid border-b-darkBlue'>
                    Our Story
                  </span>
                </h3>
                <p className='tracking-wide leading-loose font-Nunito text-center text-lg mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32'>
                  Our Pastry Shop started out as “Pete’s Bakery” in 1975. The
                  name Heidelberg Bakery was given by the 2nd owner in 1980.
                  Between 1980 and 1990 there were 5 owners before we took
                  ownership in 1996. We are very supportive of the local
                  community and provide support of Laguna Hills Cross Country
                  and Grad Night as well as the 3/5 Dark Horse Marines adopted
                  by the City of Laguna Hills.
                </p>
              </div>
              <div className='hidden md:flex md:justify-end md:mt-6 md:cover'>
                <Image
                  className='rounded-lg'
                  src={storyImage}
                  alt='Bakery Front Image'
                  priority
                  width={600}
                  height={700}
                />
              </div>
            </div>
            {/* Weddings */}
            <div className='grid grid-cols-1 my-16 md:grid-cols-2 md:gap-x-2 md:my-52'>
              <div className='hidden md:inline-block'>
                <Image
                  className='rounded-xl inline-block'
                  src={weddingMain}
                  alt='Wedding Image Image'
                  priority
                  width={500}
                  height={600}
                />
              </div>
              <div>
                <h3 className='title text-darkBrown text-center'>
                  <span className='border-b-2 border-solid border-b-darkBlue'>
                    Weddings
                  </span>
                </h3>
                <div className='flex justify-center mt-6 cover md:hidden'>
                  <Image
                    className='rounded-lg'
                    src={weddingMain}
                    alt='Wedding Image Image'
                    priority
                    width={400}
                    height={500}
                  />
                </div>
                <p className='tracking-wide leading-loose font-Nunito text-center text-lg mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32'>
                  Our Wedding Cakes have been served at many venues throughout
                  Orange County. We are listed as a preferred vendor by many
                  venues. We offer Complimentary Wedding Cake Tastings
                  (appointment required).
                </p>
                <div className='flex justify-center mt-6'>
                  <a
                    href='/weddings/info'
                    className='mt-8 inline-block bg-darkBlue border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-lightBlue'>
                    Wedding Gallery
                  </a>
                </div>
              </div>
            </div>
            {/* Bakery */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-2 mt-24'>
              <div>
                <h3 className='title text-darkBrown text-center'>
                  <span className='border-b-2 border-solid border-b-darkBlue'>
                    Bakery
                  </span>
                </h3>
                <div className='mt-4 visible flex justify-center cover md:hidden'>
                  <Image
                    className='rounded-lg inline-block'
                    src={bakeryImage}
                    alt='Bakery Front Image'
                    priority
                    width={600}
                    height={400}
                  />
                </div>
                <p className='tracking-wide leading-loose font-Nunito text-center text-lg mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32'>
                  Oven Fresh Pastries are available from 6:30am Monday thru
                  Saturday. Croissants, Muffins, Danish, Strudel, Cookies…, are
                  prepared and baked daily. Seasonal Specialties available as
                  well.
                </p>
                <div className='flex justify-center mt-6'>
                  <a
                    href='/bakery'
                    className='mt-8 inline-block bg-darkBlue border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-lightBlue'>
                    Bakery Information
                  </a>
                </div>
              </div>
              <div className='hidden md:flex md:justify-end md:cover'>
                <Image
                  className='rounded-lg inline-block'
                  src={bakeryImage}
                  alt='Bakery Front Image'
                  priority
                  width={800}
                  height={400}
                />
              </div>
            </div>
            {/* Cakes & Cupcakes */}
            <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-2 mt-24'>
              <div className='hidden md:inline-block'>
                <Image
                  className='rounded-xl inline-block'
                  src={cakesMain}
                  alt='Cakes & Cupcake Image'
                  priority
                  width={600}
                  height={600}
                />
              </div>
              <div>
                <h3 className='title text-darkBrown text-center'>
                  <span className='border-b-2 border-solid border-b-darkBlue'>
                    Cakes & Cupcakes
                  </span>
                </h3>
                <div className='flex justify-center mt-6 cover md:hidden'>
                  <Image
                    className='rounded-xl inline-block'
                    src={cakesMain}
                    alt='Cakes & Cupcake Image'
                    priority
                    width={400}
                    height={400}
                  />
                </div>
                <p className='tracking-wide leading-loose font-Nunito text-center text-lg mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32'>
                  Cakes & Cupcakes are the heart of our Bakery. We are blessed
                  with a very loyal Customer Base. Many of whom have been
                  getting their specialty cakes from our Bakery for Decades.
                </p>
                <div className='flex justify-center mt-6'>
                  <a
                    href='/cakes/info'
                    className='mt-8 inline-block bg-darkBlue border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-lightBlue'>
                    Cake Information
                  </a>
                </div>
                <div className='flex justify-center mt-6'>
                  <a
                    href='/cupcakes/info'
                    className='mt-8 inline-block bg-darkBlue border border-transparent rounded-md py-3 px-8 text-base font-medium text-white hover:bg-lightBlue'>
                    Cupcake Information
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
