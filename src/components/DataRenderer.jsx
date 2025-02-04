import React from 'react';

import { Spinner } from '@/components/ui';

const DataRenderer = ({ isLoading, error, children }) => {
  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <Spinner size='sm' />
      </div>
    );
  }

  if (error) {
    return <div className='text-center'>{error}</div>;
  }

  return children;
};

export default DataRenderer;
