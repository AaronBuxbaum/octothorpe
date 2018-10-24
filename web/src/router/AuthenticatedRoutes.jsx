import { Query } from 'react-apollo';
import { gql } from 'graphql-tag';

const GET_USER = gql`
    query getUser{
        user {
            username
        }
    }
`;

const AuthenticatedRoutes = () => (
    <Query query={GET_USER}>
        {() => (
            <div />
        )}
    </Query>
);

export default AuthenticatedRoutes;
