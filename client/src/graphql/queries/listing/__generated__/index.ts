/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getListings
// ====================================================

export interface getListings_listings {
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

export interface getListings {
  listings: getListings_listings[];
}
