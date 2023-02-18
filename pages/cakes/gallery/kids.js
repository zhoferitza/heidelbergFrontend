import React from 'react';
import Header from '../../../src/Header';
import Footer from '../../../src/Footer';
import CakeGallery from '../../../src/components/CakeGallery';
import { API } from '../../../config';

const kids = ({ cakes }) => {
  return (
    <div>
      <Header />
      <div className='mt-3 mb-3'>
        <h3 className='title text-darkBrown text-center'>
          <span className='border-b-2 border-solid border-b-darkBlue'>
            Kid Cakes
          </span>
        </h3>
      </div>
      <CakeGallery cakes={cakes} />
      <Footer />
    </div>
  );
};

export default kids;

export async function getServerSideProps() {
  const cakeType = 'kids';
  const res = await fetch(
    `${API}/cakes?filters[type]=${cakeType}&sort[0]=createdAt%3Adesc&populate=*`
  );

  const cakes = await res.json();

  return {
    props: {
      cakes,
    },
  };
}
