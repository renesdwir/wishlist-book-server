const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = "Internal server error";
  if (err.message) {
    code = 400;
    message = err.message;
  } else if (err.name) {
    code = 400;
    message = err.name;
  }

  res.status(code).json({ message });
};

module.exports = errorHandler;
