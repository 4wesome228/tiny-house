import { listingFragment } from "./../../fragments";
import { gql } from "apollo-boost";
export const DELETE_LISTING_ITEM = gql`
  mutation DeleteListingItem($id: ID!) {
    deleteListing(id: $id) {
      ...ListingFragment
    }
  }
  ${listingFragment}
`;

export * from "./__generated__";
