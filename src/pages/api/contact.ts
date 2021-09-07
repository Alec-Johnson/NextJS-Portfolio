import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default function contact(req: NextApiRequest, res: NextApiResponse) {
  require('dotenv').config();

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'alecjohnsondev@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData: nodemailer.SendMailOptions = {
    from: `${req.body.email}`,
    to: 'alecjohnsondev@gmail.com',
    subject: `Message From ${req.body.fullName}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(
    mailData,
    function (err, info: nodemailer.SentMessageInfo): void {
      if (err) console.log(err);
      else console.log(info);
    }
  );

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end();
}
