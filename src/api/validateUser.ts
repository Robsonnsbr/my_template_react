import { getUser } from "./api";

export const validateUser = async (userName: string) => {
  try {
    const fetchedUser = await getUser(userName);
    if ("errorMsg" in fetchedUser) {
      return { error: true, errorMsg: fetchedUser.errorMsg };
    } else {
      return { error: false, user: fetchedUser.data };
    }
  } catch (e) {
    return {
      error: true,
      errorMsg: "Ocorreu um erro ao buscar os dados do usuário.",
    };
  }
};
