import { PUBLIC_BACKEND_URL } from '$env/static/public';

console.log("PUBLIC_BACKEND_URL", PUBLIC_BACKEND_URL);
export const backendUrl = PUBLIC_BACKEND_URL ?? 'http://localhost:8000/api';
