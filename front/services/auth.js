import CredentialsProvider from "next-auth/providers/credentials";
import jwt_decode from "jwt-decode";

async function refreshAccessToken(tokenObject) {
    try {
        // Get a new set of tokens with a refreshToken
        const tokenResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API}/api/token/refresh`,
            {
                body: JSON.stringify({
                    refresh_token: tokenObject.refresh_token,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                cache: "no-store",
            }
        );

        const tokenData = await tokenResponse.json();

        if (!tokenResponse.ok) {
            throw tokenData;
        }

        return {
            ...tokenObject,
            token: tokenData.token,
            refresh_token: tokenData.refresh_token,
        };
    } catch (error) {
        return {
            ...tokenObject,
            error: "RefreshAccessTokenError",
        };
    }
}

export const authOptions = () => {
    return {
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
                        // console.log(userResponseData);

                        if (
                            userResponseData.token
                            // &&
                            // userResponseData.refresh_token
                        ) {
                            const tokenDecoded = jwt_decode(
                                userResponseData.token
                            );
                            const userEmail = tokenDecoded.username;
                            // console.log(tokenDecoded, userEmail);

                            const fetchUser = await fetch(
                                `${process.env.NEXT_PUBLIC_API}/api/users/email/${userEmail}`,
                                {
                                    headers: {
                                        Authorization: `Bearer ${userResponseData.token}`,
                                        "Content-Type": "application/json",
                                    },
                                    method: "GET",
                                }
                            );
                            const user = await fetchUser.json();
                            // console.log("fetchuser", user);
                            return {
                                user: user,
                                accessToken: userResponseData.token,
                            };
                        }
                        if (
                            userResponse.status === 401 &&
                            userResponseData.message
                        ) {
                            throw userResponseData.message;
                        }

                        return userResponseData.token;
                    } catch (e) {
                        throw new Error(e);
                    }
                },
            }),
        ],
        callbacks: {
            callbacks: {
                async session({ session, token, user }) {
                    session.user = token.user;
                    // console.log("session token", session, token, user);
                    return session;
                },
                async jwt({ token, account }) {
                    // console.log("token user", token, account);
                    if (user) {
                        token.user = user;
                    }
                    return token;
                },
            },
            // jwt: async (props) => {
            //     if (props) {
            //         const { token } = props;
            //         console.log("tokendvd0", token);
            //         tokenDecoded = jwt_decode(props.token);
            //         console.log("jwtuser", props);
            // This will only be executed at login. Each next invocation will skip this part.
            // token.token = user.token;
            // token.refresh_token = user.refresh_token;
            // token.expires = @TODO define refresh token expiration
            // }
            // If accessTokenExpiry
            // const tokenDecoded = jwt_decode(token.token);
            // Duration token 1 hour so refresh it every 55 minutes
            // const shouldRefreshTime = tokenExpiration(tokenDecoded);
            // If the token is still valid, just return it.
            // if (trigger !== "update" && shouldRefreshTime > 0) {
            //     return token;
            // }
            // If the call arrives after expired
            // token = await refreshAccessToken(token);
            // return tokenDecoded;
            // },
            // session: async ({ session, token, trigger, newSession }) => {
            //     if (trigger === "update" && newSession?.name) {
            //         session.name = newSession.name;
            //     }
            //     // Here we pass accessToken to the client to be used in authentication with your API
            //     session.token = token.token;
            //     session.error = token.error;
            //     session.user = jwt_decode(token.token);
            //     console.log(session);
            //     return session;
            // },
        },
        pages: { signIn: "/login" },
        secret: process.env.NEXTAUTH_SECRET,
        jwt: {
            secret: process.env.NEXTAUTH_SECRET,
        },
    };
};

export const tokenExpiration = (tokenDecoded) => {
    return Math.round(tokenDecoded.exp - 5 * 60 - Date.now() / 1000);
};
