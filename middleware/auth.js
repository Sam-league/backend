import jwt from "jsonwebtoken";

function admin(req, res, next) {
  try {
    let token = req.headers.authorization.split(" ")[1];

    let { role } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!(role === "Admin")) return res.status(401).send("Unauthorized");

    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
}
function cashierOrAdmin(req, res, next) {
  try {
    let token = req.headers.authorization.split(" ")[1];

    let { role } = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (role === "Admin" || role === "Cashier") return next();

    return res.status(401).send("Unauthorized");

    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { admin, cashierOrAdmin };
