import { addMessage, getMessages } from "./store.js";

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

export const showMessages = async () => {
  return getMessages();

  //   return new Promise((resolve, reject) => {
  //     resolve(list())
  // })
};
