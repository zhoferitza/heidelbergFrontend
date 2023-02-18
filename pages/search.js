import React, { useState, Fragment } from 'react';
import { API } from '../config';
import qs from 'qs';
import PicModal from '../src/components/PicModal';

const Search = ({ products }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');

  const handleClick = (p) => {
    setOpen(true);
    setImage(p);
  };

  return (
    <Fragment>
      {products.data !== null && products.data.length !== 0 ? (
        <div className='flex place-content-center h-56'>
          <ul role='list' className='divide-y divide-gray-200'>
            {products.data.map((product) => (
              <li key={product.id} className='flex justify-center py-4'>
                <div>
                  <a
                    onClick={() =>
                      handleClick(
                        product.attributes.image.data.attributes.formats.medium
                          .url
                      )
                    }>
                    <img
                      className='ml-3 h-24 w-24 rounded-lg'
                      src={
                        product.attributes.image.data.attributes.formats
                          .thumbnail.url
                      }
                      alt={product.attributes.name}
                    />

                    <span className='sr-only'>
                      View details for {product.attributes.name}
                    </span>
                  </a>
                </div>
                <div className='ml-6'>
                  <p className='text-sm font-medium text-gray-900'>
                    {product.attributes.name}
                  </p>
                  <p className='text-sm text-gray-500'>
                    {product.attributes.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className='my-40'>
          <h2 className='text-2xl text-center uppercase'>
            Unfortunately there is nothing to show for your search
          </h2>
        </div>
      )}

      <div>
        <PicModal show={open} onClose={() => setOpen(false)} src={image} />
      </div>
      <div className='py-10 text-center'>
        <a
          className='flex flex-row text-darkBlue justify-center pointer text-lg'
          href='/'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
            />
          </svg>
          <span className='ml-2'>Back</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Search;

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify(
    {
      filters: {
        $or: [
          { name: { $containsi: term } },
          { type: { $containsi: term } },
          { keywords: { $containsi: term } },
          { tags: { $containsi: term } },
          { occasion: { $containsi: term } },
        ],
      },
      populate: '*',
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(`${API}/cakes?${query}`);

  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
