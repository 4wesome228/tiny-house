import React from "react";
import { Skeleton, Divider, Alert } from "antd";

type Props = {
  title: string;
  error?: string | null;
};

const ListSkeleton = ({ title, error }: Props) => {
  const errorAlert = error ? (
    <Alert type="error" message={error} closable />
  ) : (
    ""
  );

  return (
    <>
      {errorAlert}
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
    </>
  );
};

export default ListSkeleton;
