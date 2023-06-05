const { constants } = require("../constant");
const errorHandler = (err, req, res, next) => {
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation error",
        message: err.message,
        stackTrack: err.stack,
      });

      break;

    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrack: err.stack,
      });

      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrack: err.stack,
      });

      break;
    case constants.UNOTHERIZED:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrack: err.stack,
      });
      case constants.SERVER_ERROR:
        res.json({
          title: "Server Error",
          message: err.message,
          stackTrack: err.stack,
        });
      break;
    default:
        console.log("No Error found")
      break;
  }
  const statusCode = res.statusCode ? res.statusCode : 500;
};

module.exports = errorHandler;
