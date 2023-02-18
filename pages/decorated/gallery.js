import React, { useEffect } from 'react';
import Header from '../../src/Header';
import Footer from '../../src/Footer';
import CakeGallery from '../../src/components/CakeGallery';
import { API } from '../../config';

const decoratedGallery = ({ cakes }) => {
  useEffect(() => {
    fetchCheck();
    console.log(API);
  }, []);
  const fetchCheck = async () => {
    const cakeType = 'cookies';
    const res = await fetch(
      `${API}/cakes?filters[type][$eq]=${cakeType}&sort[0]=createdAt%3Adesc&populate=*`
    );
    const cake = await res.json();

    console.log(cake);
  };
  return (
    <>
      <Header />
      <div className='mt-3 mb-3'>
        <h3 className='title text-darkBrown text-center'>
          <span className='border-b-2 border-solid border-b-darkBlue'>
            Decorated Cookies
          </span>
        </h3>
      </div>
      <CakeGallery cakes={cakes} />
      <Footer />
    </>
  );
};

export default decoratedGallery;

export async function getServerSideProps(context) {
  const cakeType = 'cookies';

  const res = await fetch(
    `${API}/cakes?filters[type][$eq]=${cakeType}&sort[0]=createdAt%3Adesc&populate=*`
  );

  const cakes = await res.json();

  if (!cakes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      cakes,
    },
  };
}
