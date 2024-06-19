import { useMemo } from "react";
import { User, UserVariables } from "../type";
import { apiClient } from "../../../libs/axios";

export const useUserRepository = () => {
  return useMemo(() => generateUserRepository(), []);
};

export const generateUserRepository = () => ({
  async getAll() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { data: users } = await apiClient.get<User[]>("/users");

    return {
      users,
    };
  },

  async getById(id: string) {
    const { data: user } = await apiClient.get<User>(`/users/${id}`);

    return {
      user,
    };
  },

  async create(variables: UserVariables) {
    const { data: user } = await apiClient.post<User>("/users", variables);

    return {
      user,
    };
  },

  async update(id: string, variables: UserVariables) {
    const { data: user } = await apiClient.put<User>(`/users/${id}`, variables);

    return {
      user,
    };
  },

  async delete(id: string) {
    await apiClient.delete(`/users/${id}`);

    return {
      id,
    };
  },
});
