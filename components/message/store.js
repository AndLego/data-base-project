import Model from "./model.js"

export const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

export const getMessages = async () => {
    //ask for all the documents that's the empty ()
    return await Model.find()
};

//update
//delete
