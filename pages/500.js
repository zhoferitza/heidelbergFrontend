const Custom500 = () => {
  return (
    <>
      <div className='bg-white min-h-screen flex flex-col lg:relative'>
        <div className='flex-grow flex flex-col'>
          <main className='flex-grow flex flex-col bg-white'>
            <div className='flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8'>
              <div className='flex-shrink-0 pt-10 sm:pt-16'>
                <a href='/' className='inline-flex'>
                  <h6 className='text-xl title text-darkBrown hover:text-lightBrown'>
                    Heidelberg Pastry Shop
                  </h6>
                </a>
              </div>
              <div className='flex-shrink-0 my-auto py-16 sm:py-32'>
                <p className='text-3xl font-semibold text-darkBrown uppercase tracking-wide'>
                  500 error
                </p>
                <h1 className='mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
                  Server Error
                </h1>
                <p className='mt-2 text-base text-gray-500'>
                  Something Went Wrong. Please Try again Later
                </p>
                <div className='mt-6'>
                  <a
                    href='/'
                    className='text-base font-medium text-darkBrown hover:text-cream'>
                    Go back home<span aria-hidden='true'> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='/img/ErrorImage.jpg'
            alt='Smashed Cake Image'
          />
        </div>
      </div>
    </>
  );
};

export default Custom500;
