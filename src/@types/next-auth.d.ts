/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { JWT } from 'next-auth/jwt';
import { UserType } from 'api-types';

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        userRole: UserType;
        token: string;
        isOnboarded: boolean;
        isSubscriptionActive: boolean;
        isSubscriptionCreated: boolean;
        companyId: string;
        isFirstMint: boolean;
    }

    interface User {
        token: string;
        companyId: string;
        isSubscriptionActive: boolean;
        isSubscriptionCreated: boolean;
        user: {
            isOnboarded: boolean;
            type: UserRole;
        };
        isFirstMint: boolean;
    }
}

declare module 'next-auth/jwt' {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        token: string;
        userRole: UserType;
        isOnboarded: boolean;
        isSubscriptionActive: boolean;
        isSubscriptionCreated: boolean;
        companyId: string;
        subscriptionExpiry: string;
        isFirstMint: boolean;
    }
}
