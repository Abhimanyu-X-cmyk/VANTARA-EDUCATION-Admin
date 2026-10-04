export default function handler(request, response) {
  return response.status(200).json({
    usernameConfigured: !!process.env.ADMIN_USERNAME,
    passwordConfigured: !!process.env.ADMIN_PASSWORD
  });
}