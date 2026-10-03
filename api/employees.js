export default async function handler(request, response) {

  if (request.method === "GET") {

    return response.status(200).json({
      success: true,
      message: "VANTARA employee endpoint is working!",
      employees: []
    });

  }

  if (request.method === "POST") {

    return response.status(200).json({
      success: true,
      message: "Employee endpoint received the request."
    });

  }

  return response.status(405).json({
    success: false,
    message: "Method not allowed"
  });

}