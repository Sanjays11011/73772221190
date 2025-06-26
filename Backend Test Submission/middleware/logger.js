
const logger = (req, res, next) => {
  const user = req.user; 
  if (!user) {
    return next();
  }
  console.log(`[${new Date().toISOString()}] ${user.username || user.id} - ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logger;
