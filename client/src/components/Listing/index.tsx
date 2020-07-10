import React from "react";
import { useQuery, useMutation } from "react-apollo";
import { Spin, Button, Skeleton, Avatar, Alert } from "antd";
import { List } from "antd";

import {
  getListings,
  getListings_listings,
} from "../../graphql/queries/listing";
import { GET_LISTINGS } from "../../graphql/queries";
import {
  DeleteListingItem,
  DELETE_LISTING_ITEM,
  DeleteListingItemVariables,
} from "../../graphql/mutations";

import "./index.css";
import ListSkeleton from "./list-skeleton";

const Listing = () => {
  const { data, loading, error, refetch } = useQuery<getListings>(GET_LISTINGS);
  const [
    onDeleteItem,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation<DeleteListingItem, DeleteListingItemVariables>(
    DELETE_LISTING_ITEM
  );

  const handleItemDeleting = async (id: string) => {
    await onDeleteItem({
      variables: {
        id,
      },
    });
    refetch();
  };

  const renderItem = (item: getListings_listings) => {
    return (
      <List.Item
        key={item.id}
        actions={[
          <Button type="primary" onClick={() => handleItemDeleting(item.id)}>
            Delete
          </Button>,
        ]}
      >
        <Skeleton loading={loading} active={!loading} avatar>
          <List.Item.Meta
            title={item.title}
            description={item.address}
            avatar={
              item.image && <Avatar src={item.image} shape="square" size={48} />
            }
          />
        </Skeleton>
      </List.Item>
    );
  };

  const title = "TinyHouse Listings";

  const listings =
    data && data.listings ? (
      <List
        itemLayout="horizontal"
        dataSource={data && data.listings}
        renderItem={renderItem}
        size="small"
        bordered
      ></List>
    ) : null;

  return (
    <div className="listings">
      <h2 className="listings-title">{title}</h2>
      {deleteData && (
        <Alert type="success" closable message="Successfully deleted" />
      )}
      <Spin spinning={deleteLoading}>
        {loading ? (
          <ListSkeleton title={title} />
        ) : error || deleteError ? (
          <ListSkeleton
            title={title}
            error={error ? error.message : deleteError.message}
          />
        ) : null}
        {listings}
      </Spin>
    </div>
  );
};

export default Listing;
