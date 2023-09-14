import { gql } from 'urql';

// FIXME: Add your user login mutation here
export const LOGIN_USER_MUTATION = gql`
    mutation LoginUser($input: LoginInput!) {
        login(input: $input) {
            token
            user {
                id
                email
                fullName
                type
            }
        }
    }
`;
