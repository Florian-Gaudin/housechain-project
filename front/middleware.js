export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/store", "/cart"],
    callbackUrl: "/login",
    redirect: false,
};
