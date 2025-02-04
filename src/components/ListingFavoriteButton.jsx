import { Heart } from 'lucide-react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import {
  addFavouriteListing,
  removeFavouriteListing,
} from '@/state/slices/listingsSlice';

const ListingFavoriteButton = ({ className, listing }) => {
  const { favoriteListingsIds } = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  const isFavorite = useMemo(
    () => favoriteListingsIds.includes(listing.id),
    [listing, favoriteListingsIds],
  );

  return (
    <Button
      className={className}
      variant='outline'
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        if (isFavorite) {
          dispatch(removeFavouriteListing(listing.id));
        } else {
          dispatch(addFavouriteListing(listing.id));
        }
      }}
    >
      <Heart
        className={cn('h-4 w-4', { 'fill-primary text-primary': isFavorite })}
      />
    </Button>
  );
};

export default ListingFavoriteButton;
