import nodemailer from "nodemailer";

export const nodemailerTransporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "godfrey.kuhn@ethereal.email",
    pass: "4WHNZ4ZudfuRkfD84z",
  },
});
