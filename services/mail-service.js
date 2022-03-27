import nodemailer from 'nodemailer'

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail.com',
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            ignoreTLS: true,
            auth: {
                user: 'offlensvetsletters@gmail.com' || process.env.SMTP_USER,
                pass: '12345-1q' || process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationLink(to, link) {
        await this.transporter.sendMail({
            from: process.env.USER,
            to,
            subject: `Activate your Furniking account on ${process.env.API_URL}`,
            text: '',
            html: `
                <div>
                    <h1>To activate your account go throught the link below</h1>
                    <a href="${link}">${link}</a>
                </div>
            `
        })
    }
}

export default new MailService()