import { UserProps } from "../@types/UserProps";

export const getUser = async (userName: string) => {
  const result: { data?: UserProps; errorMsg?: string } = {};

  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);

    if (response.status === 404) {
      result.errorMsg = `Usuário ${userName} não encontrado!`;
    } else if (response.status === 403) {
      result.errorMsg = "Limite de requisição atingido!"; // Autenticar a requisição para evitar esse erro.
    } else {
      const data = await response.json();
      result.data = data;
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      result.errorMsg = e.message;
    }
  }

  return result;
};
