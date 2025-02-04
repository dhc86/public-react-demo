import ListingList from '@/components/ListingList';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const ListingFavoritesPage = () => {
  const { listings, favoriteListingsIds } = useSelector(
    (state) => state.listings,
  );

  const favoriteListings = useMemo(
    () =>
      listings.filter((listing) => favoriteListingsIds.includes(listing.id)),
    [listings, favoriteListingsIds],
  );

  return (
    <div className='container py-4'>
      <ListingList listings={favoriteListings} />
    </div>
  );
};

export default ListingFavoritesPage;
