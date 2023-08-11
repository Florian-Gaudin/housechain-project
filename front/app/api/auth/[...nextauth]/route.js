import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt_decode from "jwt-decode";

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
                            return {
                                accessToken: userResponseData.token,
                                user: user[0],
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
        ],
        callbacks: {
            async jwt(props) {
                if (props.user) {
                    props.token.user = props.user.user;
                    props.token.accessToken = props.user.accessToken;
                }
                // console.log("new token", props.token);

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
    });
}

export { Auth as GET, Auth as POST };
