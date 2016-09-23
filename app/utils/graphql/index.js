import config from 'utils/config';
export fakeApi from './fakeApi.json';

export const get = (queryString) => {
  const searchQuery = new URL(config.graphQlApi.url);
  searchQuery.searchParams.append('query', queryString);
  return fetch(searchQuery, {
    method: 'GET',
  })
  .then(response => response.json());
};
export const post = (queryString) => {
  const searchQuery = new URL(config.graphQlApi.url);
  searchQuery.searchParams.append('query', queryString);
  return fetch(searchQuery, {
    method: 'POST',
  })
  .then(response => response.json());
};

export default {
  get,
  post,
};
