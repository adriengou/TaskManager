const notFound = (req, res, next) => {
  res.status(404).send("Route dos not exists");
};

module.exports = notFound;
