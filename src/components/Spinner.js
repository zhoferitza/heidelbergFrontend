import React from 'react';

const Spinner = () => {
  return (
    <span className='h-screen w-full flex justify-center items-center'>
      <span className='animate-spin relative flex h-10 w-10 rounded-sm bg-darkBlue opacity-75'></span>
    </span>
  );
};

export default Spinner;
