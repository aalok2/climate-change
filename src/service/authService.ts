import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { ILoginBody } from "../types/interface";
export default class AuthService {
  public registerUserService = async (body: ILoginBody) => {
    try {
      const { name, email, password } = body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({ name, email, password: hashedPassword });
      await user.save();

      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "1h",
        }
      );
      return token;
    } catch (err) {
      throw err;
    }
  };
  public loginUserService = async (body: ILoginBody) => {
    try {
      const { email, password } = body;
      const user = await User.findOne({ email });
      if (!user) {
        return {
          data: null,
          success: false,
        };
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return {
          data: null,
          success: false,
        };
      }

      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "1h",
        }
      );
      return {
        data: token,
        success: true,
      };
    } catch (err) {
      throw err;
    }
  };
}
