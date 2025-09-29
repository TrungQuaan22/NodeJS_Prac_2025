import { Request, Response, NextFunction } from "express";

const loginValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }
  next();
};

export { loginValidationMiddleware };