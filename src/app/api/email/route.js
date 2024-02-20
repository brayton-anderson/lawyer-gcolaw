// import nodemailer from "nodemailer";
// import { EmailTemplate } from "../../../../components/email-template";

// export const POST = async (request) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     secure: process.env.EMAIL_SECURITY,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   const formData = await request.formData();
//   const firstName = formData.get("firstName");
//   const lastName = formData.get("lastName");
//   const emailAddress = formData.get("emailAddress");
//   const legalIssue = formData.get("legalIssue");
//   const message = formData.get("message");

//   console.log(firstName, lastName, emailAddress, legalIssue, message);

//   const emailHtml = render(
//     <EmailTemplate
//       firstName={firstName}
//       lastName={lastName}
//       emailAddress={emailAddress}
//       legalIssue={legalIssue}
//       todaysDate={Date.now().toString()}
//       message={message}
//     />
//   );

//   const options = {
//     from: process.env.TRANSPORT_EMAIL,
//     to: process.env.RECIPIENT_EMAIL,
//     subject: "Message for Gakunju & Co. Advocates",
//     html: emailHtml,
//   };

//   try {
//     await transporter.sendMail(options);
//   } catch (e) {
//     console.log(e);
//   }
// };


// pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, legaIssue, message } = req.body;

      // reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.gcolaw.co.ke',
        port: 587,
        secure: true,
        auth: {
          user: 'info@gcolaw.co.ke',
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // email data
      let mailOptions = {
        from: 'gakunju@gcolaw.co.ke',
        to: 'info@gcolaw.co.ke',
        subject: 'New message from website form',
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nLegalIssue: ${legaIssue}\nMessage: ${message}`,
      };

      // Send email with defined transport object
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'An error occurred while sending the email.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}