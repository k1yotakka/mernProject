const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Ошибка сервера", error: err.message });
};

module.exports = { errorHandler };
