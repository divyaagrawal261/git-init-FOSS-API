import transporter from "../utils/nodemailer.js"
import student from "../models/studentModel.js"

const sendVerificationMail = async ({email, name, githubUsername, contactNumber, rollNo}) => {
    // Construct the verification URL with query parameters
    const verificationUrl = `http://localhost:5000?` +
        `email=${encodeURIComponent(email)}` +
        `&name=${encodeURIComponent(name)}` +
        `&githubUsername=${encodeURIComponent(githubUsername)}` +
        `&contactNumber=${encodeURIComponent(contactNumber)}` +
        `&rollNo=${encodeURIComponent(rollNo)}`;

    const res = await transporter.sendMail({
        from: process.env.SMTP_MAIL,
        to: email,
        subject: 'Verify your email address - git init FOSS',
        html: `
        <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            /* Your CSS styles here */
            .verify-btn {
              display: inline-block;
              padding: 10px 20px;
              background-color: #4CAF50;
              color: white;
              text-decoration: none;
              border-radius: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="center-content">
              <img src="https://doortodumps.com/assets/logo-D9yqyWfp.png" class="logo" alt="Logo" />
            </div>
            <h1 class="heading">Hi, ${name},</h1>
            <p class="paragraph">Please click the button below to verify your email for Door to Dumps.</p>
    
            <a href="${verificationUrl}" class="verify-btn">Verify Email</a>
    
            <div>
              <p class="paragraph-regards">Best Regards,</p>
              <p class="highlight paragraph">Door to Dumps Team</p>
            </div>
          </div>
        </body>
        </html>
        `
    });    

    if (process.env.NODE_ENV === 'development') {
        console.log(new Date().toLocaleDateString(), ' - ', new Date().toLocaleTimeString(), ' - ', email, ' - Verification URL sent');
    }

    return res;
}

const apply = async (req, res) => {
    const {email, contactNumber, name, rollNo, githubUsername} = req.body;

    try {
        const mailRes = await sendVerificationMail({email, contactNumber, name, rollNo, githubUsername});

        if(mailRes) {
            res.status(200).json({message: "Verification email sent successfully"});
        } else {
            res.status(400).json({message: "Failed to send verification email"});
        }
    } catch (error) {
        console.error('Error in apply function:', error);
        res.status(500).json({message: "Internal server error"});
    }
}

const verifyEmail = async(req, res)=>{

  const {email, contactNumber, name, rollNo, githubUsername } = req.body;

  try{
    const existing = await student.findOne({
      $or: [
        { email },
        { githubUsername },
        { contactNumber },
        { rollNo }
      ]
    });
    if(existing){
      return res.status(400).json({message: "User Already Registered"});
    }
    else
    {
      const Student = await student.create({email, contactNumber, name, rollNo, githubUsername});
  res.status(200).json("Email Verified Successfully, Happy Hacking!");
    }
}
catch(error){
  console.error('Error in verifyEmail function:', error);
  res.status(500).json({message: "Internal Server Error"});
} 
}

export { apply, verifyEmail }