/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteListingItem
// ====================================================

export interface DeleteListingItem_deleteListing {
  __typename: "Listing";
  id: string | null;
  title: string | null;
  image: string | null;
  address: string | null;
  price: number | null;
  numOfGuests: number | null;
  numOfBeds: number | null;
  numbOfBath: number | null;
  rating: number | null;
}

export interface DeleteListingItem {
  deleteListing: DeleteListingItem_deleteListing | null;
}

export interface DeleteListingItemVariables {
  id: string;
}
