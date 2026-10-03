export default async function handler(request, response) {

  if (request.method !== "POST") {
    return response.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  return response.status(200).json({
    success: true,
    message: "VANTARA login endpoint is working!",
    authenticated: false
  });

}