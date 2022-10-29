import { getUsers, saveUser } from "./store.js";

export const addUser = (name) => {
  if (!name) {
    throw Error("Invalid name");
  }

  const user = {
    name,
  };

  return saveUser(user);
};

export const showUsers = async (filter) => {
  return await getUsers(filter);
};
