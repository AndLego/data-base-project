export const addMessage = async (user, message) => {
  try {
    if (!user || !message) {
      console.error("[messageController], no hay usuario o mensaje");
      throw Error("Datos incorrectos");
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date().toLocaleString(),
    };
    return fullMessage;
  } catch (err) {
    console.error("error" + err);
  }

  return false;
};
