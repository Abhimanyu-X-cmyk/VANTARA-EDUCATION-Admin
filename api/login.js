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

  /*
    TEMPORARY TEST ACCOUNT

    This is only for testing the API.
    We will NOT keep real employee passwords
    inside the source code.
  */

  if (
    username === "vantaraadmin" &&
    password === "Vantara@123"
  ) {

    return response.status(200).json({

      success: true,

      message: "Login successful",

      user: {
        username: "vantaraadmin",
        role: "admin"
      }

    });

  }

  return response.status(401).json({

    success: false,

    message: "Invalid username or password"

  });

}