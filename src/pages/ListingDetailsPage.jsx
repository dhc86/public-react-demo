import { useParams } from 'react-router-dom';

import DataRenderer from '@/components/DataRenderer';
import ListingDetailsCard from '@/components/ListingDetailsCard';
import useFetch from '@/hooks/useFetch';

const ListingDetailsPage = () => {
  const { listingId } = useParams();
  const [data, isLoading, error] = useFetch(`/api/listings/${listingId}`);

  return (
    <div className='container py-4'>
      <DataRenderer isLoading={isLoading} error={error}>
        <ListingDetailsCard listing={data} />
      </DataRenderer>
    </div>
  );
};

export default ListingDetailsPage;
