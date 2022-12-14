import { addMessage, getMessages, removeMessage, updateText } from "./store.js";

export const sendMessage = async (user, message) => {
  try {
    if (!user || !message) {
      console.error("[messageController], no hay usuario o mensaje");
      throw Error("Datos incorrectos");
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
      // con mongodb no sirve, depronto al hacer la peticion
      //date: new Date().toLocaleString(),
    };
    addMessage(fullMessage);
    return fullMessage;
  } catch (err) {
    console.error("error sending" + err);
  }
};

export const showMessages = async (filter) => {
  return await getMessages(filter);

  //   return new Promise((resolve, reject) => {
  //     resolve(list())
  // })
};

export const updateMessage = async (id, message) => {
  try {
    if (!id || !message) {
      console.error("invalid data");
      throw Error("Invalid data");
    }
    const result = await updateText(id, message);
    return result;
  } catch (err) {
    console.error("error updating" + err);
  }
};

export const deleteMessage = async (id) => {
  try {
    if (!id) {
      console.error("invalid id");
      throw Error("Invalid id");
    }
    return await removeMessage(id);
  } catch (err) {
    console.error("error deleting" + err);
  }
};
