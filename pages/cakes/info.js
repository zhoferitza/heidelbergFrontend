import { Fragment } from 'react';
import Header from '../../src/Header';
import Footer from '../../src/Footer';

const round = [
  {
    size: '8',
    serving: '10',
    price: '$33.50',
    fruit: '$3.00',
    whipped: '$3.00',
  },
  {
    size: '10',
    serving: '18-20',
    price: '$59.00',
    fruit: '$6.00',
    whipped: '$6.00',
  },
  {
    size: '12',
    serving: '30-35',
    price: '$89.00',
    fruit: '$9.00',
    whipped: '$9.00',
  },
];

const sheet = [
  {
    size: '1/4',
    serving: '18-24',
    price: '$47.00',
    fruit: '$5.00',
    whipped: '$5.00',
  },
  {
    size: '1/2',
    serving: '40-50',
    price: '$79.00',
    fruit: '$8.00',
    whipped: '$8.00',
  },
  {
    size: '3/4',
    serving: '60-80',
    price: '$125.00',
    fruit: '$12.00',
    whipped: '$12.00',
  },
  {
    size: 'Full',
    serving: '90-100',
    price: '$160.00',
    fruit: '$16.00',
    whipped: '$16.00',
  },
];
const CakeInfo = () => {
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
                className='absolute inset-0 h-full w-full object-fit'
                src='/img/cakeInfo.jpeg'
                alt='Birthday Cakes'
                priority='true'
              />
            </div>
            <div
              aria-hidden='true'
              className='absolute inset-0 bg-gray-900 opacity-50'
            />

            <div className='relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0'>
              <h1 className='text-4xl font-extrabold tracking-tight text-white lg:text-5xl'>
                Creating Amazing
                <br />
                Cakes for
                <br />
                Your Special Day
              </h1>

              <a
                href='/contact'
                className='mt-8 inline-block bg-darkBlue border border-transparent rounded-md py-3 px-14 text-lg font-semibold text-white hover:bg-lightBlue'>
                Call Us to <br />
                Order Yours
              </a>
            </div>
          </div>
          <div className='flex justify-center -mt-11'>
            <span className='h-24 w-24 rounded-full bg-darkBrown py-2 z-40 flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='inline-block h-16 w-16'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z'
                />
              </svg>
            </span>
          </div>
        </main>
      </div>
      {/* Type */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Type of Cake
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Chocolate, Vanilla(Yellow), Marble, Lemon, Banana, Red Velvet
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
            Bavarian Cream (Raspberry, Strawberry, Lemon, Cherry, Pineapple,
            Coconut, Banana), Chocolate Mousse, Cappuccino/Mocha, Amaretto,
            Kahlua, Irish Cream
          </p>
          <p className='italic mt-4 tracking-wide leading-loose font-Nunito text-center text-xl mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            <span>Upgrades:</span>
            <br />
            Fresh Fruit, Cream Cheese, Chocolate Ganache
          </p>
        </div>
      </section>
      {/* Specialty Cakes */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Specialty Cakes
            </span>
          </h3>
          <p className='mt-4 tracking-wide leading-loose font-Nunito text-center text-xl mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Tiramisu, Carrot, Black Forest, German Chocolate, Cheesecake...
          </p>
          <p className='mt-4 tracking-wide leading-loose font-Nunito text-center text-xl mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Please inquire about pricing for these cakes. We also make Petits
            fours, Mini desserts...
          </p>
        </div>
        <div className='mt-10 text-center md:text-justify mx-14 md:mx-32'>
          <div className='text-center'>
            <p className='italic'>
              *Basic Price Includes: Butter Cream Icing, Standard Flowers or
              Balloons,Inscription,....
            </p>
            <p className='text-center'>
              Custom Decoration upgrades depend on cake size and intricacy of
              design. Please inquire.
            </p>
            <p className='title text-darkBrown'>Lead Time:</p>
            <p>Standard Cakes - Mon-Thur 2 Days, Fri-Sun 3 Days</p>
            <p>Custom Decorated Cakes - 5 Days Regardless of Day of the Week</p>
            <p>Tiered Cakes - 2 Weeks Minimum</p>
            <p className='text-sm'>
              Lead times may vary depending on Order Volume
            </p>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className='mt-20 mb-20'>
        <div>
          <div>
            <h3 className='title text-darkBrown text-center'>
              <span className='border-b-2 border-solid border-b-darkBlue'>
                Below is pricing for Standard Cakes.
              </span>
            </h3>
            <div className='mt-8 flex flex-col md:px-10 md:mx-5'>
              <div className='inline-block min-w-fit py-2 align-middle md:px-6 lg:px-8 '>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg '>
                  <table className='min-w-full divide-y divide-gray-300 text-center'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 text-sm font-semibold text-gray-900 sm:pl-6'>
                          Size
                        </th>
                        <th
                          scope='col'
                          className='md:px-3 py-3.5 text-sm font-semibold text-gray-900'>
                          Servings
                          <br />
                          <span>(Round)</span>
                        </th>
                        <th
                          scope='col'
                          className='md:px-3 py-3.5 text-sm font-semibold text-gray-900'>
                          Price
                        </th>
                        <th
                          scope='col'
                          className='md:px-3 py-3.5 text-sm font-semibold text-gray-900'>
                          Fresh Fruit
                        </th>
                        <th
                          scope='col'
                          className='md:px-3 py-3.5 text-sm font-semibold text-gray-900'>
                          Whipped Cream <br />
                          <span>Choc. Ganache/Cream Cheese</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {round.map((p) => (
                        <tr key={p.size}>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {p.size}
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {p.serving}
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {p.price}
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {p.fruit}
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {p.whipped}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='mt-8 flex flex-col md:px-10 md:mx-5'>
              <div className='inline-block min-w-fit py-2 align-middle md:px-6 lg:px-8 '>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg '>
                  <table className='min-w-full divide-y divide-gray-300 text-center'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 text-sm font-semibold text-gray-900 sm:pl-6'>
                          Size
                        </th>
                        <th
                          scope='col'
                          className='md:px-3 py-3.5 text-sm font-semibold text-gray-900'>
                          Servings
                          <br />
                          <span>(Sheets)</span>
                        </th>
                        <th
                          scope='col'
                          className='md:px-3 py-3.5 text-sm font-semibold text-gray-900'>
                          Price
                        </th>
                        <th
                          scope='col'
                          className='md:px-3 py-3.5 text-sm font-semibold text-gray-900'>
                          Fresh Fruit
                        </th>
                        <th
                          scope='col'
                          className='md:px-3 py-3.5 text-sm font-semibold text-gray-900'>
                          Whipped Cream <br />
                          <span>Choc. Ganache/Cream Cheese</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {sheet.map((p) => (
                        <tr key={p.size}>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {p.size}
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {p.serving}
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {p.price}
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {p.fruit}
                          </td>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {p.whipped}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default CakeInfo;
