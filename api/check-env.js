// VANTARA Environment Check

export default function handler(request, response) {

  return response.status(200).json({

    success: true,

    usernameConfigured:
      !!process.env.ADMIN_USERNAME,

    passwordConfigured:
      !!process.env.ADMIN_PASSWORD

  });

}