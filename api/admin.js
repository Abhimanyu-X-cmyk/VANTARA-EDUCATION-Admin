export default function handler(request, response) {

  if (request.method !== "GET") {

    return response.status(405).json({
      success: false,
      message: "Method not allowed"
    });

  }

  return response.status(200).json({

    success: true,

    portal: "VANTARA Admin Portal",

    version: "1.0.0",

    role: "admin",

    message: "VANTARA Admin API is working!"

  });

}