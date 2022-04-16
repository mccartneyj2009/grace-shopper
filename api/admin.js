function adminRequired(req, res, next) {
  console.log(req.user.amininistrator);
  if (!req.amininistrator === true) {
    next({
      name: "Unqualified",
      message: "You cannot do this",
    });
  }
}

adminRequired();
