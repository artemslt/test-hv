import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { login } from "@/services/api";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                const response = await login({
                    email,
                    password,
                });
                const user = { ...response.user, token: response.token };
                if (user.token) {
                    return user; // auth success
                } else {
                    return null; // auth failed
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
});
