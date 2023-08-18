// import { Error } from "../components/Error";
// import { UserProps } from "../@types/user";

// export const GetUser = () => {
//   const loadUser = async (userName: string) => {
//     const response = await fetch(`https://api.github.com/users/${userName}`);
//     const data = await response.json();
//     if (response.status === 404) {
//       return;
//     }
//     const { avatar_url, name, login, followers, following, bio } = data;

//     const userData: UserProps = {
//       avatar_url,
//       name,
//       login,
//       followers,
//       following,
//       bio,
//     };
//     return null;
//   };
// };

export const getUSer = async (userName: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
