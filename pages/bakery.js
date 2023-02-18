import { Fragment } from 'react';
import Header from '../src/Header';
import Footer from '../src/Footer';

const features = [
  {
    name: 'Rings $13.75',
    flavor: [
      {
        index: 1,
        type: 'Blueberry',
      },
      {
        index: 2,
        type: 'Apple Walnut',
      },
      {
        index: 3,
        type: 'Cranberry Orange',
      },
    ],
  },
  {
    name: 'Apple Strudel',
    flavor: [
      {
        index: 1,
        type: 'Small (~6 Servings) $14.95',
      },
      {
        index: 2,
        type: 'Large (~10 Servings) $24.50',
      },
    ],
  },
  {
    name: 'Danish Braided',
    flavor: [
      {
        index: 1,
        type: 'Apple Walnut $12.75',
      },
      {
        index: 2,
        type: 'Strawberry Cheese $12.75',
      },
      {
        index: 3,
        type: 'Plum Almond $12.75',
      },
      {
        index: 4,
        type: '8" Round Custard Raisin Coffee Cake (Kringle) $12.75',
      },
    ],
  },
  {
    name: 'Croissants',
    flavor: [
      {
        index: 1,
        type: 'Butter Croissant $2.50',
      },
      {
        index: 2,
        type: 'Chocolate $3.00',
      },
      {
        index: 3,
        type: 'Nut $3.00',
      },
      {
        index: 4,
        type: 'Ham & Cheese $3.50',
      },
      {
        index: 5,
        type: 'Mini Croissants $14.50/Dozen',
      },
    ],
  },
  {
    name: 'QuickBread Loaves $8.50',
    flavor: [
      {
        index: 1,
        type: '(Seasonal)',
      },
      {
        index: 2,
        type: 'Banana Walnut',
      },
      {
        index: 3,
        type: 'Lemon Poppy',
      },
      {
        index: 4,
        type: 'Cranberry Orange',
      },
      {
        index: 5,
        type: 'Pumpkin Walnut',
      },
    ],
  },
  {
    name: 'Turnover/Pinwheel/Crispie/Brownie',
    flavor: [
      {
        index: 1,
        type: 'Peach Turnover $2.50',
      },
      {
        index: 2,
        type: 'Boisenberry Turnover $2.50',
      },
      {
        index: 3,
        type: 'Apricot Pinwheel $2.50',
      },
      {
        index: 4,
        type: 'Raspberry Pinwheel $2.50',
      },
      {
        index: 5,
        type: 'Cinnamon Crispie $2.50',
      },
      {
        index: 6,
        type: 'Apple Strudel $3.00',
      },
      {
        index: 7,
        type: 'Brownie $3.25',
      },
    ],
  },
];
const bakery = () => {
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
                src='/img/bakeryImage.jpg'
                alt='bakery case'
                priority='true'
              />
            </div>
            <div
              aria-hidden='true'
              className='absolute inset-0 bg-gray-900 opacity-50'
            />

            <div className='relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0'>
              <h1 className='text-4xl font-extrabold tracking-tight text-white lg:text-5xl'>
                Oven Fresh Pastries are available from 6:30am Monday thru
                Saturday.
              </h1>
            </div>
          </div>
          <div className='flex justify-center -mt-11'>
            <span className='h-24 w-24 rounded-full bg-darkBrown py-2 z-40 flex items-center justify-center'>
              <img
                className='h-16 w-16'
                src='/img/bread.png'
                alt='cupcake'
                priority='true'
              />
            </span>
          </div>
        </main>
      </div>
      {/* Muffin */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Muffins $2.50
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Apple Cinnamon, Banana Walnut, Blueberry, Cranberry Orange, Lemon,
            Pumpkin Walnut (Seasonal)
          </p>
        </div>
      </section>
      {/* Specialty Muffin */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Specialty Muffins $2.75
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Harvest Muffins, Carrot Bran
          </p>
        </div>
      </section>
      {/* Danish */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Danish $2.50
            </span>
          </h3>
          <p className='mt-4 tracking-wide leading-loose font-Nunito text-center text-xl mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Fruit (Apple, Strawberry, Peach, Cherry, Boysenberry), Cinnamon Nut,
            Raspberry Cheese, Cheese Pocket, Prune, Poppy Seed, Almond Custard
            Raisen
          </p>
          <p className='mt-4 tracking-wide leading-loose font-Nunito text-center text-xl mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Almond(Bear Claw) $3.00
          </p>
          <p className='mt-4 tracking-wide leading-loose font-Nunito text-center text-xl mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Traditional Cinnamon Roll $2.75
          </p>
        </div>
      </section>
      {/* Cookies */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Cookies $0.80 each or $8.50/Dozen
            </span>
          </h3>
          <p className='mt-4 tracking-wide leading-loose font-Nunito text-center text-xl mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Oatmeal Raisin, Choc. Chip, Walnut, Mexican Wedding, Palmiers,
            Almond Sugar Cookie, Raspberry-Apricot Thumbprint, Choc. Dipped
            Cookie
          </p>
        </div>
      </section>
      {/* Rugala */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Rugala $1.00 each or $11.00/Dozen
            </span>
          </h3>
          <p className='mt-4 tracking-wide leading-loose font-Nunito text-center text-xl mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Chocoalte Chip, Cinnamon Raisin, Raspberry
          </p>
        </div>
      </section>
      <section>
        <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
          <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
            <p className='title mt-2 text-3xl font-bold tracking-tight text-darkBrown sm:text-4xl'>
              <span className='border-b-2 border-solid border-b-darkBlue'>
                See a list of our other Bakery Offerings
              </span>
            </p>

            <div className='mt-12'>
              <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                {features.map((feature) => (
                  <div key={feature.name} className='pt-6'>
                    <div className='flow-root rounded-lg bg-gray-50 px-6 pb-8'>
                      <div className='-mt-6'>
                        <h3 className='mt-8 text-lg font-medium tracking-tight text-gray-900'>
                          {feature.name}
                        </h3>
                        <ul>
                          {feature.flavor.map((f) => (
                            <li key={f.index}>{f.type}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default bakery;
