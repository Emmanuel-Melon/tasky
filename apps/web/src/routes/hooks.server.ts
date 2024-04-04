// src/hooks.server.js
export async function handle({ request, resolve }) {
    // Assuming you have a way to retrieve the user ID, e.g., from a session or a cookie
    const userId = "3";

    // Clone the request to avoid mutating the original request
    const modifiedRequest = new Request(request, {
        headers: {
            ...request.headers,
            // Add the userId to the request headers
            'X-User-Id': userId
        }
    });

    // Continue with the modified request
    const response = await resolve(modifiedRequest);

    return response;
}
