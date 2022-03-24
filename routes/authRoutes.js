import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const attemptLogin = async (req, res) => {
  try {
    let user = await User.findOne({ user_email: req.body.user_email });
    if (!user) return res.status(404).send("User not found");

    let validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate) return res.status(401).send("Authentication unsuccessfull");

    //token genration
    let token = jwt.sign(
      {
        user_name: user.user_name,
        user_email: user.user_email,
        isVerified: user.isVerified,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY
    );
    res.status(200).send({ succes: true, token });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

export default attemptLogin;
