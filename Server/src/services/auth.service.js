import User from "../models/users";
const jwt = require("jsonwebtoken");

class AuthService {
  //reister service
  static async register(data) {
    try {
      const user = new User(data);
      const obj = await user.save();
      return obj;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
