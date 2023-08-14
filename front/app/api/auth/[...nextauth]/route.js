import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import EmailProvider from "next-auth/providers/email";

async function Auth(request, context) {
    return NextAuth(request, context, {
        providers: [
            CredentialsProvider({
                name: "credentials",
                authorize: async (credentials) => {
                    try {
                        // Authenticate user with credentials
                        const userResponse = await fetch(
                            `${process.env.NEXT_PUBLIC_API}/api/login_check`,
                            {
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    username: credentials.username,
                                    password: credentials.password,
                                }),
                                method: "POST",
                            }
                        );

                        const userResponseData = await userResponse.json();

                        if (
                            userResponseData.token
                            // &&
                            // userResponseData.refresh_token
                        ) {
                            const fetchUser = await fetch(
                                `${process.env.NEXT_PUBLIC_API}/api/me`,
                                {
                                    headers: {
                                        Authorization: `Bearer ${userResponseData.token}`,
                                        "Content-Type": "application/json",
                                    },
                                    method: "GET",
                                }
                            );
                            const user = await fetchUser.json();
                            console.log("user dans route.js", user);
                            return {
                                accessToken: userResponseData.token,
                                user: user,
                            };
                        }
                        if (
                            userResponse.status === 401 &&
                            userResponseData.message
                        ) {
                            throw userResponseData.message;
                        }

                        return userResponseData;
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
