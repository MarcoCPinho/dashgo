import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get("users");

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

  return users;
}

const useUsers = () => { 
  return useQuery('users', getUsers, {
      staleTime: 1000 * 5, // 5 segundos ainda é "fresh"... ou seja, não fará nova requisição caso o usuário venha e volte
    })
};

export { getUsers, useUsers };
