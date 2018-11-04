import authentication from './authentication';
import hashtag from './hashtag';
import profile from './profile';

const mutations = {
  ...authentication,
  ...hashtag,
  ...profile,
};

export default mutations;
