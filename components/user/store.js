import Model from "./model.js";

export const saveUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
};

export const getUsers = async (filter) => {
  return await Model.find(filter);
};
