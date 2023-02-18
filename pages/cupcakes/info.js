import { Fragment } from 'react';
import Header from '../../src/Header';
import Footer from '../../src/Footer';

const cupcakeInfo = () => {
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
                src='/img/cupcakeflower.jpg'
                alt='flower cupcakes'
                priority='true'
              />
            </div>
            <div
              aria-hidden='true'
              className='absolute inset-0 bg-gray-900 opacity-50'
            />

            <div className='relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0'>
              <h1 className='text-4xl font-extrabold tracking-tight text-white lg:text-5xl'>
                Exquisitly Designed Cupcakes for your Next Party or Gathering
              </h1>
            </div>
          </div>
          <div className='flex justify-center -mt-11'>
            <span className='h-24 w-24 rounded-full bg-darkBrown py-2 z-40 flex items-center justify-center'>
              <img
                className='h-16 w-16'
                src='/img/cupcake.png'
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
            Standard Cupcakes
          </span>
        </h3>
      </div>
      {/* Flavors */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Flavors
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Minimum Order of 12 of Each Flavor - $2.50 per Cupcake, $27.50 per
            dozen (Includes Butter Cream Frosting)
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            White (Vanilla), Chocolate, Lemon
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Red Velvet w/Cream Cheese Frosting (Minimum Order of 12 of each
            flavor) $2.75 per cupcake, $31.00 per dozen
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Carrot (Minimum Order of 12 of each flavor) $2.75 per cupcake,
            $31.00 per dozen
          </p>
        </div>
      </section>
      {/* Fillings */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Fillings
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Custard, Cream Cheese, Chocolate Ganache, Bavarian Cream, Raspberry
            (Add $0.50 each cupcake)
          </p>
        </div>
      </section>
      <div className='mt-20'>
        <h3 className='title text-darkBrown text-center mx-14 md:mx-32'>
          <span className='border-b-2 border-solid border-b-darkBlue'>
            Custom Cupcakes
          </span>
        </h3>
      </div>
      {/* Flavors */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Flavors
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Minimum Order of 12 of Each Flavor - $4.00 per Cupcake, $48.00 per
            dozen (Includes Butter Cream Frosting)
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            White (Vanilla), Chocolate, Lemon
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Red Velvet w/Cream Cheese Frosting (Minimum Order of 12 of each
            flavor) $4.00 per cupcake, $48.00 per dozen
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Carrot (Minimum Order of 12 of each flavor) $4.00 per cupcake,
            $48.00 per dozen
          </p>
        </div>
      </section>
      {/* Fillings */}
      <section className='my-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Fillings
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Custard, Cream Cheese, Chocolate Ganache, Bavarian Cream, Raspberry
            (Add $0.50 each cupcake)
          </p>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default cupcakeInfo;
