import { Request, Response } from "express";
import AuthService from "../service/authService";

export default class AuthController extends AuthService {
  public registerUser = async (req: Request, res: Response) => {
    try {
      const token = await this.registerUserService(req.body);

      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ message: "Error registering user", error });
    }
  };
  public loginUsers = async (req: Request, res: Response) => {
    try {
      const token = await this.LoginUserService(req.body);

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: "Error logging in", error });
    }
  };
}
