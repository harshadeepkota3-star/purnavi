import formidable from 'formidable';
import nodemailer from 'nodemailer';
import fs from 'fs';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const form = formidable({
        keepExtensions: true,
    });

    try {
        const { fields, files } = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) {
                    console.error('Error parsing form:', err);
                    reject(err);
                    return;
                }
                resolve({ fields, files });
            });
        });

        const getField = (field) => {
            if (Array.isArray(field)) return field[0] || '';
            return field || '';
        };

        const name = getField(fields.fullName);
        const email = getField(fields.email);
        const phone = getField(fields.phone);
        const experience = getField(fields.experience);
        const currentLocation = getField(fields.currentLocation);
        const preferredLocation = getField(fields.preferredLocation) || 'Not provided';
        const noticePeriod = getField(fields.noticePeriod) || 'Not provided';
        const currentCTC = getField(fields.currentCTC) || 'Not provided';
        const expectedCTC = getField(fields.expectedCTC) || 'Not provided';
        const skills = getField(fields.skills);
        const linkedIn = getField(fields.linkedIn) || 'Not provided';

        // Get the uploaded file
        const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;

        if (!name || !email || !phone || !resumeFile) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        let fileContent;
        try {
            fileContent = fs.readFileSync(resumeFile.filepath || resumeFile.path); // handle v2/v3 path differences
        } catch (e) {
            console.error('File read error:', e);
            return res.status(500).json({ message: 'Error reading attached file' });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
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
            subject: `New Career Profile Registration from ${name}`,
            text: `
Profile Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Total Experience: ${experience}
Current Location: ${currentLocation}
Preferred Location: ${preferredLocation}
Notice Period: ${noticePeriod}
Current CTC: ${currentCTC}
Expected CTC: ${expectedCTC}
Key Skills: ${skills}
LinkedIn: ${linkedIn}
            `,
            replyTo: email,
            attachments: [
                {
                    filename: resumeFile.originalFilename || resumeFile.name || `resume-${name}.pdf`,
                    content: fileContent,
                }
            ]
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Profile registered successfully!' });

    } catch (error) {
        console.error('Error in register api:', error);
        return res.status(500).json({ message: 'Error processing form submission', error: error.message });
    }
}
