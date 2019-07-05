import { HttpLink } from 'apollo-link-http';

const uri = process.env.REACT_APP_API_ENDPOINT;

export default new HttpLink({
  uri: uri,
});
