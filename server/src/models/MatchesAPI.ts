import { RESTDataSource } from 'apollo-datasource-rest';
// import getUsername from '../utils/getUsername';

class MatchesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://flask:5000';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.Authorization);
    }

    async getMatches() {
        return this.get('matches');
    }
}

export default MatchesAPI;
