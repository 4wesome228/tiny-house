import { Listing, IListing } from "../../models";

const Query = {
  listings: async (_, args) => {
    return await Listing.find();
  },
};

const Mutation = {
  deleteListing: async (_, { id }: { id: string }): Promise<IListing> => {
    return await Listing.findOneAndDelete({ _id: id });
  },
};

export { Query, Mutation };
