import axios from 'axios';

export const getRandomQuote = async () => {
  return axios('https://api.quotable.io/random')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err;
    });
};
