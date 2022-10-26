export const success = (req, res, message, status) =>{
    res
        .status(status || 200)
        .send(message || "default message")
}

export const error = (req, res, error, status, details) =>{
  console.error(`response error: ${details}`);
    res
        .status(status || 500)
        .send(error || "default error")
}