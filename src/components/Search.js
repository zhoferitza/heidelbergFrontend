import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Search = () => {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/search?term=${term}`);
    setTerm('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <input
            type='text'
            name='search'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            id='search'
            className='shadow-sm focus:ring-darkBlue focus:border-darkBlue block w-full sm:text-md text-center border-gray-300 rounded-md'
            placeholder='Search'
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
