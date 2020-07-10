import { gql } from "apollo-boost";

export const listingFragment = gql`
  fragment ListingFragment on Listing {
    id
    title
    image
    address
    price
    numOfGuests
    numOfBeds
    numbOfBath
    rating
  }
`;
