import NextAuth, {SessionStrategy} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {ApiUserLogin} from "@/lib/api/backend-api";
import { encode, decode } from 'next-auth/jwt';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'Email', type: 'email', placeholder: 'test@test.com'},
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials: any) {
                const res = await ApiUserLogin(credentials?.email, credentials?.password);

                if (res?.status == 400 || res?.status == 401) {
                    throw res;
                }

                return res;
            },
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user};
        },
        async session({session, token}) {
            session.user = token as any;
            return session;
        }
    },
    pages: {
        signIn: '/login'
    },
    session: {
        strategy: "jwt" as SessionStrategy,
        maxAge: 60 * 60 * 2
    },
    jwt: {encode, decode}
})

export { handler as GET, handler as POST}