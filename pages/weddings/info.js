import { Fragment } from 'react';
import Header from '../../src/Header';
import Footer from '../../src/Footer';

const pricing = [
  {
    serving: '35',
    layer: '2',
    price: '$4.50/$5.00',
  },
  {
    serving: '50',
    layer: '2',
    price: '$4.50/$5.00',
  },
  {
    serving: '65',
    layer: '3',
    price: '$4.25/$4.75',
  },
  {
    serving: '75',
    layer: '3',
    price: '$4.25/$4.75',
  },
  {
    serving: '100',
    layer: '3',
    price: '$4.00/$4.50',
  },
  {
    serving: '125',
    layer: '4',
    price: '$4.00/$4.50',
  },
  {
    serving: '160',
    layer: '4',
    price: '$3.75/$4.25',
  },
  {
    serving: '200',
    layer: '4',
    price: '$3.75/$4.25',
  },
  {
    serving: '250',
    layer: '5',
    price: '$3.60/$4.15',
  },
];

const weddingInfo = () => {
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
                className='absolute inset-0 h-full w-full lg:w-1/2 object-fit'
                src='/img/weddingInfo1.jpeg'
                alt='Wedding Cake'
                priority='true'
              />
              <img
                className='hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2 lg:object-fit'
                src='/img/weddingInfo2.jpg'
                alt='Wedding Cake'
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
                Wedding Cakes for
                <br />
                Your Special Day
              </h1>

              <a
                href='/contact'
                className='mt-8 inline-block bg-darkBlue border border-transparent rounded-md py-3 px-14 text-lg font-semibold text-white hover:bg-lightBlue'>
                Schedule <br />a Tasting
              </a>
            </div>
          </div>
          <div className='flex justify-center -mt-11'>
            <span className='h-24 w-24 rounded-full bg-darkBrown py-2 z-40 flex items-center justify-center'>
              <img
                className='h-16 w-16'
                src='/img/wedding-cake.png'
                alt='cupcake'
                priority='true'
              />
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
            Chocolate, White, Marble, Lemon, Banana, Red Velvet, Carrot
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
            Chocolate Mousse, Chocolate Ganache, Cappuccino, Amaretto, Kahlua,
            Irish Cream, Bavarian Cream (with Raspberry, Lemon, Cherry,
            Pineapple, Strawberry),Cream Cheese, Fresh Fruit Fillings. Chocolate
            Ganache, Cream Cheese (additional Charge.
          </p>
        </div>
      </section>
      {/* Frosting */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center lg:text-justify mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Frosting
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:text-justify md:mt-4 md:text-2xl md:mx-32 '>
            Butter Cream, Fondent
          </p>
        </div>
        <div className='mt-10 text-center lg:text-justify mx-14 md:mx-32'>
          <div className='text-center'>
            <p>
              The size of individual tiers may vary, depending on style (Round,
              Square, ...), set up and customer preference. $0.25 upgrade for
              shapes other than round. Additional charges may apply for
              intricate designs, chocolate shells, fresh flowers, fondent
              flowers,...
            </p>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className='mt-20'>
        <div>
          <div>
            <h3 className='title text-darkBrown text-center'>
              <span className='border-b-2 border-solid border-b-darkBlue'>
                Pricing
              </span>
            </h3>
            <div className='mt-8 flex flex-col px-10 mx-5'>
              <div className='inline-block min-w-fit py-2 align-middle md:px-6 lg:px-8 '>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg '>
                  <table className='min-w-full divide-y divide-gray-300 text-center'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='py-3.5 pl-4 text-sm font-semibold text-gray-900 sm:pl-6'>
                          Servings
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-sm font-semibold text-gray-900'>
                          Layers
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3.5 text-sm font-semibold text-gray-900'>
                          Price per Serving <br />
                          <span>Butter Cream/Fondant</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {pricing.map((p) => (
                        <tr key={p.serving}>
                          <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {p.serving}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {p.layer}
                          </td>
                          <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                            {p.price}
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
      {/* Frosting Types */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Frosting Types
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
            Butter Cream
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
            Fondant
          </p>
        </div>
      </section>
      {/* Cake Setup */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Cake Setup
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
            White or Clear Poles - $20 (Refundable)
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
            Silver Cake Stand - $100 ($70 Refundable)
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
            Please have items returned within 2 weeks and in clean condition
          </p>
        </div>
      </section>
      {/* Delivery and Setup */}
      <section className='mt-20'>
        <div>
          <h3 className='title text-darkBrown text-center mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              Delivery & Setup Pricing
            </span>
          </h3>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
            Laguna Hills, Mission Viejo, Lake Forest, Laguna Niguel $25
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
            San Juan Capistrano, Dana Point, Irvine $35
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
            San Clemente, Newport Beach, Costa Mesa, Laguna Beach $45
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
            *Sunday delivery Prices are double those listed
          </p>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
            Please ask for prices and availability to locations not listed
          </p>
        </div>
      </section>

      {/* General Information */}
      <section className='mt-20 mb-20'>
        <div>
          <h3 className='title text-darkBrown text-center mx-14 md:mx-32'>
            <span className='border-b-2 border-solid border-b-darkBlue'>
              General Information
            </span>
          </h3>
          <div className='mt-10 text-justify mx-14 md:mx-32'>
            <div className='text-center'>
              <p className='text-center'>
                Prices include complimentary first anniversary cake (6" round)
                replicating the top tier of your Wedding Cake. We do not provide
                the Top Piece/Ornament although, if provided we will set up.
                Please allow a 20 minute window for our deliveries. We require a
                50% down payment the day you order the cake. The balance is to
                be paid in full 2 weeks prior to the wedding. We reserve the
                right to a 10% cancellation fee. No refunds if cake is cancelled
                within 2 weeks of the Wedding. We appreciate a minimum lead time
                of 6 weeks for any Wedding Cake order although, some dates are
                booked several months in advance. We deliver 7 days a week. For
                more information or to make an appointment please call us
                anytime during business hours. Monday: - Friday 6:30am - 3:00pm,
                Saturday: 6:30am - 1:00pm, Sunday: 8:00am - 9:00am (special
                order pick up only).
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className='tracking-wide leading-loose font-Nunito text-center text-xl mt-8 mx-14 md:mt-4 md:text-2xl md:mx-32'>
            All prices are subject to change without notice
          </p>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default weddingInfo;
