import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, company, email, phone, interest, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create transporter
    // Note: Using Hostinger/Titan Mail settings as the domain seems to be hosted there or similar.
    // If this doesn't work, common SMTP hosts are:
    // Gmail: smtp.gmail.com
    // Outlook: smtp-mail.outlook.com
    // Titan/Hostinger: smtp.titan.email or mail.hostinger.com

    const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com', // Hostinger SMTP for purnaviitsolutions.com
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `New Contact Form Submission from ${name}`,
        text: `
      Name: ${name}
      Company: ${company}
      Email: ${email}
      Phone: ${phone}
      Interested In: ${interest}
      
      Message:
      ${message}
    `,
        replyTo: email,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email', error: error.message });
    }
}
