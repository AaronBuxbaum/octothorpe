import { RESTDataSource } from 'apollo-datasource-rest';

class MatchesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://flask:5000';
    }

    async getMatches(userId) {
        return this.get('matches', { userId });
    }
}

export default MatchesAPI;
