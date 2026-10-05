export default async function handler(request, response) {

    if (request.method !== "POST") {
        return response.status(405).json({
            success: false,
            message: "Method not allowed"
        });
    }

    try {

        const { name, className, email } = request.body || {};

        if (!email || !email.includes("@")) {
            return response.status(400).json({
                success: false,
                message: "Valid email is required"
            });
        }

        /*
         * For now, we only test that the Admin Portal
         * can receive registration data.
         *
         * Permanent storage will be added next.
         */

        return response.status(200).json({
            success: true,
            message: "Student registration received",
            student: {
                name: name || "",
                className: className || "",
                email: email
            }
        });

    } catch (error) {

        return response.status(500).json({
            success: false,
            message: "Server error"
        });

    }
}