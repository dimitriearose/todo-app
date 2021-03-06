import nodemailer from 'nodemailer'
import { getCurrentTime } from './formatDate'
import env from './env'

interface User {
  firstName: string
  email: string
  lastName: string
}

const sendEmail = async (email: string, subject: string, resetURL: string): Promise<any> => {
  const transporter = nodemailer.createTransport({
    service: env.EMAIL_HOST,
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS,
    },
  })

  // const htmlFile = path.join(__dirname + '/../views/email.ejs')
  // const html: any = await ejs.renderFile(htmlFile, { subject, resetURL })

  const message = {
    from: `${env.EMAIL_NAME} <${env.EMAIL_USER}>`,
    to: email,
    subject: subject,
    html: `<!DOCTYPE html>
    <html lang="en" style="box-sizing: border-box">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Email</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <style></style>
      <body style="font-family: 'Poppins', Arial, Helvetica, sans-serif">
        <div class="container" style="max-width: 500px; margin: auto">
          <h4 style="font-weight: 500; text-align: center; font-size: 40px; color: #1c1e21; margin-bottom: 20px">
            Todoify
          </h4>
    
          <h5 style="font-weight: 400; text-align: center; font-size: 18px; color: #1c1e21; margin-bottom: 20px">
            Password reset requested for your Todoify account.
          </h5>
    
          <p style="margin-bottom: 30px; font-size: 17px; text-align: center; color: #1c1e21">
            You are receiving this email because you (or someone else) has requested the reset of a password. If it was not
            you who requested this password reset, ignore this email. If it was you who requested a password reset, click
            the link below to be taken to a page where you can request a new password for your account.
          </p>
    
          <p style="margin-bottom: 30px; text-align: center; font-size: 17px; color: #1c1e21">
            The link will expire in 10 minutes , if you need to use it make your it is used soon afrer receiving it.
          </p>
    
          <a
            style="
              display: block;
              font-size: 16px;
              color: #fff;
              margin: 40px auto 30px auto;
              text-align: center;
              background-color: #c0392b;
              text-decoration: none;
              cursor: pointer;
              transition: 0.2s ease-out;
              padding: 10px 20px;
            "
            href="${resetURL}"
            >Change Password</a
          >
    
          <p style="margin-bottom: 20px; font-size: 17px; color: #1c1e21">
            Sincerely, <br />
            The Todoify Team
          </p>
    
          <hr style="margin-top: 20px; border: none; border-bottom: 1px solid #1c1e21; opacity: 0.3; margin-bottom: 40px" />
    
          <div
            class="footer"
            style="font-size: 16px; background-color: #c0392b; min-height: 100px; color: #fff; padding: 20px"
          >
            <p style="margin-bottom: 20px; color: #fff">
              Need help? Feel free to tweet as us on Twitter or to send us an email at to our contact team. If you want to
              give us any feed back or suggestions feel free to send it to us as well.
            </p>
    
            <p style="font-size: 13px; margin-bottom: 5px; text-align: center">&copy; Todoify Incorporated 2020</p>
            <p style="text-align: center; font-size: 13px">San Francisco, California</p>
          </div>
        </div>
      </body>
    </html>
    `,
  }

  transporter.sendMail(message)
}

const sendLoginEmail = async (email: string, subject: string, user: User): Promise<any> => {
  const transporter = nodemailer.createTransport({
    service: env.EMAIL_HOST,
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS,
    },
  })

  const { date, formattedDay, formattedMonth, hours, minutes, seconds, year } = getCurrentTime()

  // const htmlFile = path.join(__dirname + '/../views/login.ejs')
  // const html: any = await ejs.renderFile(htmlFile, {
  //   ipaddress,
  //   firstName: user.firstName,
  //   lastName: user.lastName,
  //   country,
  //   capital,
  //   date,
  //   formattedDay,
  //   formattedMonth,
  //   hoursForClock,
  //   minutes,
  //   seconds,
  //   ampm,
  //   year,
  // })

  const message = {
    from: `${env.EMAIL_NAME} <${env.EMAIL_USER}>`,
    to: email,
    subject: subject,
    html: `<!DOCTYPE html>
    <html lang="en" style="box-sizing: border-box">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Email</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      </head>
    
      <body style="font-family: 'Poppins', Arial, Helvetica, sans-serif">
        <div class="container" style="max-width: 500px; margin: auto">
          <h4 style="font-weight: 500; text-align: center; font-size: 40px; color: #1c1e21; margin-bottom: 20px">
            Todoify
          </h4>
    
          <h5 style="font-weight: 400; text-align: center; font-size: 18px; color: #1c1e21; margin-bottom: 20px">
            Just Logged In!
          </h5>
    
          <p style="margin-bottom: 30px; font-size: 17px; text-align: center; color: #1c1e21">
            Hi ${user.firstName} ${user.lastName}
          </p>
    
          <p style="margin-bottom: 30px; font-size: 17px; text-align: center; color: #1c1e21">
            It looks like someone logged into your account, on ${formattedDay} , ${formattedMonth} ${date}, ${year} at ${hours}:${minutes}:${seconds} UTC.
          </p>
    
          <p style="margin-bottom: 30px; text-align: center; font-size: 17px; color: #1c1e21">
            If this was you, please disregard this email. No further action is needed.
          </p>
    
          <p style="margin-bottom: 30px; text-align: center; font-size: 17px; color: #1c1e21">
            If this wasn???t you, please change your password on the Todoify website, a link can be found below.
          </p>
    
          <a
            style="
              display: block;
              font-size: 16px;
              color: #fff;
              margin: 40px auto 30px auto;
              text-align: center;
              background-color: #c0392b;
              text-decoration: none;
              cursor: pointer;
              transition: 0.2s ease-out;
              padding: 10px 20px;
            "
            href="https://todoifyapp.netlify.app/forgotpassword"
            >Change Your Password</a
          >
    
          <p style="margin-bottom: 20px; font-size: 17px; color: #1c1e21">
            Sincerely, <br />
            The Todoify Team
          </p>
    
          <hr style="margin-top: 20px; border: none; border-bottom: 1px solid #1c1e21; opacity: 0.3; margin-bottom: 40px" />
    
          <div
            class="footer"
            style="font-size: 16px; background-color: #c0392b; min-height: 100px; color: #fff; padding: 20px"
          >
            <p style="margin-bottom: 20px; color: #fff">
              Need help? Feel free to tweet as us on Twitter or to send us an email at to our contact team. If you want to
              give us any feed back or suggestions feel free to send it to us as well.
            </p>
    
            <p style="font-size: 13px; margin-bottom: 5px; text-align: center">&copy; Todoify Incorporated 2020</p>
            <p style="text-align: center; font-size: 13px">San Francisco, California</p>
          </div>
        </div>
      </body>
    </html>
    `,
  }

  transporter.sendMail(message)
}

const sendSignUpEmail = async (email: string, subject: string, user: User): Promise<any> => {
  const transporter = nodemailer.createTransport({
    service: env.EMAIL_HOST,
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS,
    },
  })

  // const htmlFile = path.join(__dirname + '/../views/signup.ejs')
  // const html: any = await ejs.renderFile(htmlFile, { firstName: user.firstName, lastName: user.lastName })

  const message = {
    from: `${env.EMAIL_NAME} <${env.EMAIL_USER}>`,
    to: email,
    subject: subject,
    html: `<!DOCTYPE html>
    <html lang="en" style="box-sizing: border-box">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Email</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      </head>
    
      <body style="font-family: 'Poppins', Arial, Helvetica, sans-serif">
        <div class="container" style="max-width: 500px; margin: auto">
          <h4 style="font-weight: 500; text-align: center; font-size: 40px; color: #1c1e21; margin-bottom: 20px">
            Todoify
          </h4>
    
          <h5 style="font-weight: 400; text-align: center; font-size: 18px; color: #1c1e21; margin-bottom: 20px">
            You Registered For Todoify!
          </h5>
    
          <p style="margin-bottom: 30px; font-size: 17px; text-align: center; color: #1c1e21">
            Hi ${user.firstName} ${user.lastName}
          </p>
    
          <p style="margin-bottom: 30px; font-size: 17px; text-align: center; color: #1c1e21">
            Thanks for registering with Todoify. We promise you will not regret that decision. Use the link below to get
            started.
          </p>
    
          <a
            style="
              display: block;
              font-size: 16px;
              color: #fff;
              margin: 40px auto 30px auto;
              text-align: center;
              background-color: #c0392b;
              text-decoration: none;
              cursor: pointer;
              transition: 0.2s ease-out;
              padding: 10px 20px;
            "
            href="https://todoifyapp.netlify.app"
            >Todoify</a
          >
    
          <p style="margin-bottom: 20px; font-size: 17px; color: #1c1e21">
            Sincerely, <br />
            The Todoify Team
          </p>
    
          <hr style="margin-top: 20px; border: none; border-bottom: 1px solid #1c1e21; opacity: 0.3; margin-bottom: 40px" />
    
          <div
            class="footer"
            style="font-size: 16px; background-color: #c0392b; min-height: 100px; color: #fff; padding: 20px"
          >
            <p style="margin-bottom: 20px; color: #fff">
              Need help? Feel free to tweet as us on Twitter or to send us an email at to our contact team. If you want to
              give us any feed back or suggestions feel free to send it to us as well.
            </p>
    
            <p style="font-size: 13px; margin-bottom: 5px; text-align: center">&copy; Todoify Incorporated 2020</p>
            <p style="text-align: center; font-size: 13px">San Francisco, California</p>
          </div>
        </div>
      </body>
    </html>
    `,
  }

  transporter.sendMail(message)
}

export { sendLoginEmail, sendSignUpEmail }

export default sendEmail
