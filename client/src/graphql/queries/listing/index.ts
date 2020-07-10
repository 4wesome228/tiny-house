import { listingFragment } from "./../../fragments";
import { gql } from "apollo-boost";

export const GET_LISTINGS = gql`
  query getListings {
    listings {
      ...ListingFragment
    }
  }
  ${listingFragment}
`;

export * from "./__generated__";
