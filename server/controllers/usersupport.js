import axios from "axios";

export const usersupport = async (req, res) => {
  try {

    const { name, useremail, subject, message } = req.body;

    // console.log("reqbody:",req.body)
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "ShopSphere Support",
          email: process.env.shopSphere_Email
        },

        to: [
          {
            email: process.env.shopSphere_Email
          }
        ],

        replyTo: {
          email: useremail,
          name: name
        },

        subject: subject,

        htmlContent: `
        <h2>New Support Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${useremail}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong> ${message}</p>
       
        `
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    return res.status(200).json({
      success: true,
      message: "Message sent to admin successfully"
    });

  } catch (err) {
    console.log(err.message);

    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
}