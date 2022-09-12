const { CustomAPIError } = require("../errors/customs");
const errorHandlerMidlleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: `Oops! Something went wrong, please try again` });
};

module.exports = errorHandlerMidlleware;
