export default async function handler(request, response) {

  if (request.method !== "POST") {
    return response.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  const { username, password } = request.body || {};

  if (!username || !password) {
    return response.status(400).json({
      success: false,
      message: "Username and password are required"
    });
  }

  // Read credentials from Vercel Environment Variables
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

  if (
    username === ADMIN_USERNAME &&
    password === ADMIN_PASSWORD
  ) {

    return response.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        username: username,
        role: "admin"
      }
    });

  }

  return response.status(401).json({
    success: false,
    message: "Invalid login details"
  });

}