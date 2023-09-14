/* eslint-disable @typescript-eslint/require-await */
import { fetchExchange, ssrExchange } from 'urql';
import { devtoolsExchange } from '@urql/devtools';
import { authExchange } from '@urql/exchange-auth';
import { cacheExchange } from '@urql/exchange-graphcache';
import { retryExchange } from '@urql/exchange-retry';
import { API_URL } from 'constants/environment';
import { isClient } from 'utils/is-client';

const clientConfigNonLogged = {
    url: API_URL,
    exchanges: [cacheExchange({}), fetchExchange],
};

const ssrCache = ssrExchange({ isClient });

const handleAuthorization = (token: string) => (token ? `Bearer ${token}` : '');

export const expiredEvent = 'expiredSession';
export const expiredStorageKey = 'isExpired';

const introspectedSchema = {
    __schema: {
        queryType: { name: 'Query' },
        mutationType: { name: 'Mutation' },
        subscriptionType: { name: 'SubscriptionType' },
    },
};

const clientConfigLogged = (token: string) => {
    return {
        url: API_URL,
        exchanges: [
            devtoolsExchange,
            cacheExchange({
                schema: introspectedSchema,
                keys: {},
                updates: {
                    Mutation: {},
                },
                resolvers: {},
            }),
            ssrCache,
            authExchange(async (utils) => {
                return {
                    addAuthToOperation(operation) {
                        if (!token) {
                            return operation;
                        }
                        return utils.appendHeaders(operation, {
                            Authorization: handleAuthorization(token),
                        });
                    },
                    didAuthError(error) {
                        return error.graphQLErrors.some(
                            (e) => e.extensions?.code === 'UNAUTHENTICATED',
                        );
                    },
                    async refreshAuth() {
                        window.localStorage.setItem(expiredStorageKey, 'true');
                        window.dispatchEvent(new Event(expiredEvent));
                    },
                };
            }),
            retryExchange({
                initialDelayMs: 1000,
                maxDelayMs: 5000,
                randomDelay: true,
                maxNumberAttempts: 100,
                retryIf: (error, operation) => {
                    const { kind } = operation;
                    if (kind === 'mutation')
                        return !!(
                            error.graphQLErrors.length > 0 || error.networkError
                        );
                    return false;
                },
            }),
            fetchExchange,
        ],
    };
};

export { clientConfigLogged, clientConfigNonLogged };
