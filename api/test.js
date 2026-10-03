export default function handler(request, response) {
  response.status(200).json({
    success: true,
    message: "VANTARA Portal backend is working!",
    portal: "VANTARA Admin Portal",
    version: "v1"
  });
}