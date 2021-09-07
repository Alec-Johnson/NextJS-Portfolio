import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse
) {
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

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData: nodemailer.SendMailOptions = {
    from: `${req.body.email}`,
    to: 'alecjohnsondev@gmail.com',
    subject: `Message From ${req.body.fullName}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end();
}
