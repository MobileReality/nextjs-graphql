/* eslint-disable require-atomic-updates */
/* eslint-disable @typescript-eslint/require-await */
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cacheExchange, createClient, fetchExchange } from 'urql';
import { LOGIN_USER_MUTATION } from 'api/graphql/mutations/auth';
import { API_URL, NEXTAUTH_SECRET } from 'constants/environment';

const client = createClient({
    url: API_URL,
    exchanges: [cacheExchange, fetchExchange],
});

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };

                const { data, error } = await client
                    .mutation(LOGIN_USER_MUTATION, {
                        input: {
                            email,
                            password,
                        },
                    })
                    .toPromise();

                if (error) {
                    throw error;
                }

                return {
                    ...data.login,
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.token = user?.token;
                return token;
            }

            return token;
        },
        async session({ session, token }) {
            session.token = token?.token;
            return session;
        },
    },
    secret: NEXTAUTH_SECRET,
    pages: {
        signIn: '/',
    },
};

export default NextAuth(authOptions);
