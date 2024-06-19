import { FC } from "react";
import { Presentation } from "./presentation";
import { useGetUserAllQuery } from "@/features/user/usecases/query";

export const Container: FC = () => {
  const { data } = useGetUserAllQuery();

  return <Presentation users={data?.users} />;
};
