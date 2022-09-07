import axios from 'axios';

export const getRandomQuote = async tag => {
  if (!tag) {
    return axios('https://api.quotable.io/random')
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  return axios(`https://api.quotable.io/random?tags=${tag}`).then(response => {
    return response.data;
  });
};
