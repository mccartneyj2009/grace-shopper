function adminRequired(req, res, next) {
  console.log(req.user.amininistrator);
  if (!req.user.amininistrator === true) {
    next({
      name: "Unqualified",
      message: "You cannot do this",
    });
  }
  next();
}

module.exports = adminRequired;
