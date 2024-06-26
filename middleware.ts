export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/organization/:path*",
        "/admin/:path*",
    ],
};