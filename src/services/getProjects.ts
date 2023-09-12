export const getProjects = async (userName?: string) => {
  const result: { data?: unknown; errorMsg?: string } = {};

  try {
    const response = await fetch(
      //   `https://api.github.com/repos/Robsonnsbr/${userName}`
      `https://api.github.com/users/Robsonnsbr/repos`
    );

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
export const getProject = async (nameProject?: string) => {
  const result: { data?: unknown; errorMsg?: string } = {};

  try {
    const response = await fetch(
      `https://api.github.com/repos/Robsonnsbr/${nameProject}`
    );

    if (response.status === 404) {
      result.errorMsg = `Usuário ${nameProject} não encontrado!`;
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
