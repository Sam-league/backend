function logger(req, res, next) {
  console.log(
    `Method : ${req.method} Host: ${req.hostname} URl: ${req.originalUrl}`
  );
  next();
}

export { logger };
