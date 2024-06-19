import type { User, UserVariables } from "../type";
import { useUserRepository } from "@/features/user/repositories/repository";
import { useMutation } from "@tanstack/react-query";

export const useCreateUserMutation = () => {
  const repository = useUserRepository();

  const createUser = useMutation({
    mutationFn: (formValues: User) => {
      return repository.create(formValues);
    },
    onSuccess: (data) => {
      console.log(data, "success!");
    },
    onError: () => {
      console.log("error!");
    },
  });

  return {
    createUser,
  };
};

export const useUpdateUserMutation = () => {
  const repository = useUserRepository();

  const updateUser = useMutation({
    mutationFn: (id: string, formValues: UserVariables) => {
      return repository.update(id, formValues);
    },
    onSuccess: (data) => {
      console.log(data, "success!");
    },
    onError: () => {
      console.log("error!");
    },
  });

  return {
    updateUser,
  };
};

export const useDeleteUserMutation = () => {
  const repository = useUserRepository();

  const deleteUser = useMutation({
    mutationFn: (id: string) => {
      return repository.delete(id);
    },
    onSuccess: (data) => {
      console.log(data, "success!");
    },
    onError: () => {
      console.log("error!");
    },
  });

  return {
    deleteUser,
  };
};
