import nodemailer from 'nodemailer';

export default async (req, res) => {
  const { email, titre, message, subject } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_GMAIL,
      pass: process.env.PASS_GMAIL,
    },
  });

  try {
    const emailResponse = await transporter.sendMail({
      from: email,
      to: process.env.USER_GMAIL,
      subject: `${
        subject ? subject : 'Formulaire du portfolio'
      }Formulaire du portfolio - ${titre}`,
      html: `<p>Message en provenance du portfolio</p><br>
         <p>${titre}<br></p>
         <p>${message}<br></p>
         <p>${email}<br></p>`,
    });

    console.log('Message envoyez', emailResponse.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
};
