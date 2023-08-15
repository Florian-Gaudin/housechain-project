import { sign } from "jsonwebtoken";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/dist/client/components/headers";
// import EmailProvider from "next-auth/providers/email";

export async function createCookies(credentials) {
    // console.log(credentials.username.username);
    const secret = process.env.JWT_SECRET;
    const username = credentials.username;
    const MAX_AGE = 60 * 60 * 24 * 30;
    const token = sign(
        {
            username,
        },
        secret,
        { expiresIn: MAX_AGE }
    );
    const outsiteJWTCookie = cookies().set({
        name: "OutSiteJWT",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: MAX_AGE,
    });
    const usernameCookie = cookies().set({
        name: "Username",
        value: username,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: MAX_AGE,
    });
    return outsiteJWTCookie;
}

export async function cookiesDeleting() {
    cookies().delete("OutSiteJWT");
    cookies().delete("Username");
}

async function Auth(request, context) {
    return NextAuth(request, context, {
        providers: [
            CredentialsProvider({
                name: "credentials",
                authorize: async (credentials) => {
                    const cookies = await createCookies(credentials);
                    try {
                        // Authenticate user with credentials
                        const userLogin = await fetch(
                            `${process.env.NEXT_PUBLIC_API}/api/login`,
                            {
                                headers: {
                                    "Content-Type": "application/json",
                                    Cookie: cookies,
                                },
                                body: JSON.stringify({
                                    username: credentials.username,
                                    password_login: credentials.password,
                                }),
                                method: "POST",
                            }
                        );

                        const userLoginResponse = await userLogin.json();
                        console.log(userLoginResponse, userLogin);
                        credentials.access_token =
                            userLoginResponse.access_token;

                        if (userLogin.status === 200) {
                            const getJwt = await fetch(
                                `${process.env.NEXT_PUBLIC_API}/api/login_check`,
                                {
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        username: credentials.username,
                                        password: credentials.access_token,
                                    }),
                                    method: "POST",
                                }
                            );
                            const getJwtResponse = await getJwt.json();
                            console.log(
                                "getjwt",
                                getJwt,
                                "getjwtresponse",
                                getJwtResponse
                            );
                            if (
                                getJwtResponse.token &&
                                getJwt.status === 200
                                // &&
                                // TODO
                                // getJwtResponse.refresh_token
                            ) {
                                const fetchUser = await fetch(
                                    `${process.env.NEXT_PUBLIC_API}/api/me`,
                                    {
                                        headers: {
                                            Authorization: `Bearer ${getJwtResponse.token}`,
                                            "Content-Type": "application/json",
                                        },
                                        method: "GET",
                                    }
                                );
                                const user = await fetchUser.json();
                                console.log("user dans route.js", user);
                                //Delete cookies for more security
                                const deleteCookies = await cookiesDeleting();
                                return {
                                    accessToken: user.token,
                                    user: user,
                                };
                            }
                            if (
                                getJwt.status === 401 &&
                                getJwtResponse.message
                            ) {
                                throw getJwt.message;
                            }
                        }

                        if (
                            userLogin.status === 401 &&
                            userLoginResponse.message
                        ) {
                            throw userLoginResponse.message;
                        }
                    } catch (e) {
                        throw new Error(e);
                    }
                },
            }),
            // EmailProvider({
            //     server: process.env.EMAIL_SERVER,
            //     from: process.env.EMAIL_FROM,
            // }),
        ],
        callbacks: {
            async jwt(props) {
                if (props.user) {
                    props.token.user = props.user.user;
                    props.token.accessToken = props.user.accessToken;
                }
                // console.log(
                //     "new token",
                //     props.token,
                //     "jwtprops.user",
                //     props.user
                // );

                // ----------------------------------------------------------------------
                // // TODO : REFRESH TOKEN WHEN EXPIRY
                // // This will only be executed at login. Each next invocation will skip this part.
                // token.token = user.token;
                // token.refresh_token = user.refresh_token;
                // // token.expires = @TODO define refresh token expiration
                // // If accessTokenExpiry
                // const tokenDecoded = jwt_decode(token.token);
                // // Duration token 1 hour so refresh it every 55 minutes
                // const shouldRefreshTime = tokenExpiration(tokenDecoded);
                // // If the token is still valid, just return it.
                // if (trigger !== "update" && shouldRefreshTime > 0) {
                //     return token;
                // }
                // // If the call arrives after expired
                // token = await refreshAccessToken(token);
                // return tokenDecoded;
                // ----------------------------------------------------------------

                return props.token;
            },
            async session(props) {
                // console.log("session", props);
                props.session.user = props.token.user;
                props.session.accessToken = props.token.accessToken;
                // // console.log("session", session);
                return props.session;
            },
        },
        secret: process.env.NEXTAUTH_SECRET,
        jwt: {
            secret: process.env.NEXTAUTH_SECRET,
        },
        pages: {
            signIn: "/login",
        },
    });
}

export { Auth as GET, Auth as POST };
