import { useSuspenseQuery } from "@tanstack/react-query";
import { useUserRepository } from "@/features/user/repositories/repository";
import { User } from "@/features/user/type";

export const useGetUserAllQuery = () => {
  const repository = useUserRepository();

  return useSuspenseQuery<{ users: User[] }>({
    queryKey: ["user"],
    queryFn: () => repository.getAll(),
  });
};

export const useGetUserByIdQuery = (id: string) => {
  const repository = useUserRepository();

  return useSuspenseQuery<{ user: User }>({
    queryKey: ["user", id],
    queryFn: () => repository.getById(id),
  });
};
