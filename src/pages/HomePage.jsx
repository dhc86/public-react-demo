import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DataRenderer from '@/components/DataRenderer';
import ListingFilters from '@/components/ListingFilters';
import ListingList from '@/components/ListingList';
import { Separator } from '@/components/ui';
import { fetchListings } from '@/state/slices/listingsSlice';

// import useFetch from '@/hooks/useFetch';
const HomePage = () => {
  const [filters, setFilters] = useState({
    dates: undefined,
    guests: 0,
    search: '',
  });
  // replaced useFect with redux
  // const [data, isLoading, error] = useFetch('/api/listings', filters);
  const { listings, status, error } = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  useEffect(() => {
    const request = dispatch(fetchListings(filters));
    return () => {
      request.abort();
    };
  }, [dispatch, filters]);

  const handleOnFiltersChange = useCallback((filters) => {
    setFilters(filters);
  }, []);

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ListingFilters onChange={handleOnFiltersChange} />
        <Separator className='my-4' />
      </div>
      <DataRenderer isLoading={status === 'loading'} error={error}>
        <ListingList listings={listings} />
      </DataRenderer>
    </div>
  );
};

export default HomePage;
