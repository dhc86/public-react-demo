import { useCallback, useState } from 'react';

import DataRenderer from '@/components/DataRenderer';
import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Separator } from '@/components/ui';
import useFetch from '@/hooks/useFetch';

const HomePage = () => {
  const [filters, setFilters] = useState({
    dates: undefined,
    guests: 0,
    search: '',
  });
  const [data, isLoading, error] = useFetch('/api/listings', filters);

  const handleOnFiltersChange = useCallback((filters) => {
    setFilters(filters);
  }, []);

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleOnFiltersChange} />
        <Separator className='my-4' />
      </div>
      <DataRenderer isLoading={isLoading} error={error}>
        <ListingList listings={data} />
      </DataRenderer>
    </div>
  );
};

export default HomePage;
