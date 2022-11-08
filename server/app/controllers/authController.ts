import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authController = {
  signupPage: async (req: Request, res: Response) => {
    const sessionAuth = req.session.isAuth;
    res.json({ msg: "SIGN UP", sessionAuth });
  },
  signUp: async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    // Check if email exists
    const user = await prisma.user.findMany({
      where: { email: email },
    });
    if (user.length >= 1) {
      return res.status(500).json({
        message: "Registration failed",
      });
    } else {
      bcrypt.genSalt(10, function (err, Salt) {
        // if the mail doesn't exist in the DB, hash and salt the password
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              message: "Registration failed",
            });
          } else {
            // then add the new user to the DB with the hashed and salted pawword
            const createUser = prisma.user
              .create({
                data: {
                  username,
                  email,
                  password: hash,
                },
              })
              .then((result: any) => {
                res.redirect("/login");
              })
              .catch((err: any) => {
                console.log(err);
                res.status(500).json({
                  message: "Registration failed",
                });
              });
          }
        });
      });
    }
  },
  loginPage: async (req: Request, res: Response) => {
    const sessionAuth = req.session.isAuth;
    res.json({ sessionAuth });
  },
  logIn: async (req: Request, res: Response) => {
    const { username, password } = req.body;

    // check if user exists
    const user = await prisma.user.findFirst({
      where: { username: username },
    });
    // if user doesn't exist, redirect to the login page
    if (!user) {
      return res.redirect("/login");
    }
    if (user) {
      // check if the password entered is the same as the user's in the DB
      bcrypt.compare(password, String(user.password), (err, result) => {
        if (err || !result) {
          console.log("connection failed");
          return res.redirect("/login");
        }
        console.log("connected");
        // if everything matches, redirect to the homepage
        req.session.user_id = user.user_id;
        req.session.isAuth = true;
        req.session.username = username;
        const sessionAuth = req.session.isAuth;
        // redirect the user to the session cookie if it exists
        const redirectTo = req.session.redirectTo || "/";
        // delete the session cookie so it is not present on the next request
        delete req.session.redirectTo;
          // redirecting the user to where they want to go
        res.redirect(redirectTo || "/");
      });
      // if not, redirect to the login page
    }
  },
  logOut: async (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) throw reportError;
      res.redirect("/login");
    });
  },
};
