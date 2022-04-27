function adminRequired(req, res, next) {
  console.log(req.user.admininistrator);
  if (!req.user.admininistrator === true) {
    next({
      name: "Unqualified",
      message: "You cannot do this",
    });
  }
  next();
}

module.exports = adminRequired;
