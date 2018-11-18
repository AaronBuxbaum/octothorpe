import MatchesAPI from './models/MatchesAPI';

const dataSources = () => ({
    matchesAPI: new MatchesAPI(),
});

export default dataSources;
