import Model from "./model.js";

export const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

export const getMessages = async (filter) => {
  return await Model.find(filter);
};

export const updateText = async (id, message) => {
  const foundMessage = await Model.findById(id);

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
};

export const removeMessage = async (id) => {
  return await Model.deleteOne({
    _id: id,
  });
};
