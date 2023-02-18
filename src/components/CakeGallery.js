import React, { useState } from 'react';
import PicModal from './PicModal';

const CakeGallery = ({ cakes }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');

  const handleClick = (p) => {
    setOpen(true);
    setImage(p);
  };
  return (
    <>
      {cakes !== undefined && cakes.data.length !== 0 ? (
        <div className='mb-5'>
          <div className='mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8'>
            <ul
              role='list'
              className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
              {cakes.data.map((cake) => (
                <li key={cake.id} className='relative'>
                  <div className='group aspect-w-10 aspect-h-9 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-darkBlue focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
                    <img
                      className='pointer-events-none object-fill group-hover:opacity-75'
                      src={
                        cake.attributes.image.data
                          ? cake.attributes.image.data.attributes.formats
                              .thumbnail.url
                          : '/img/heidelberglogo.jpg'
                      }
                      alt={cake.attributes.name}
                    />
                    <button
                      type='button'
                      className='absolute inset-0 focus:outline-none'
                      onClick={() =>
                        handleClick(
                          cake.attributes.image.data.attributes.formats.medium
                            .url
                        )
                      }>
                      <span className='sr-only'>
                        View details for {cake.attributes.name}
                      </span>
                    </button>
                  </div>
                  <p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>
                    {cake.attributes.name}
                  </p>
                  <p className='pointer-events-none block text-sm font-medium text-gray-500'>
                    {cake.attributes.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <PicModal show={open} onClose={() => setOpen(false)} src={image} />
        </div>
      ) : (
        <div className='my-40'>
          <h2 className='text-2xl text-center uppercase'>
            There are no photos to show for this category
          </h2>
        </div>
      )}
    </>
  );
};

export default CakeGallery;
