import authService from "../services/auth.service";
const jwt = require("jsonwebtoken");
import User from "../models/users";
import dotenv from "dotenv";
dotenv.config();

class Auth {
  //register
  async register(req, res) {
    try {
      if (!req.body.fullName || !req.body.password) {
        res.json({ success: false, msg: "Please pass username and password." });
      } else {
        const newUser = {
          fullName: req.body.fullName,
          email: req.body.email,
          password: req.body.password,
        };
        const user = await authService.register(newUser);

        const token = jwt.sign(user.toJSON(), process.env.SECRET_TOKEN, {
          expiresIn: "1h",
        });
        //Send the jwt in the response
        return res.status(200).send({
          success: true,
          msg: "You are successfully register",
          token: token,
        });
      }
    } catch (err) {
      res.status(422).json({ success: false, message: "User already exists." });
    }
  }
  //login

  login(req, res) {
    User.findOne(
      {
        email: req.body.email,
      },
      (err, user) => {
        if (err) throw err;

        if (!user) {
          res
            .status(401)
            .send({
              success: false,
              message: "Authentication failed. User not found.",
            });
        } else {
          // check if password matches
          user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err) {
              // if user is found and password is right create a token
              var token = jwt.sign(user.toJSON(), process.env.SECRET_TOKEN, {
                expiresIn: "10m",
              });
              // return the information including token as JSON
              res.json({ success: true, token: token });
            } else {
              res
                .status(422)
                .send({
                  success: false,
                  message: "Authentication failed. Wrong password.",
                });
            }
          });
        }
      }
    );
  }
}

export default new Auth();
