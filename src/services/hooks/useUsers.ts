import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

const getUsers = async (page: number): Promise<GetUsersResponse> => {
  const { data, headers } = await api.get("users", { params: { page } });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return { users, totalCount };
};

const useUsers = (page: number) => {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, //10 minutos ainda é "fresh"... ou seja, não fará nova requisição caso o usuário venha e volte
  });
};

export { getUsers, useUsers };
