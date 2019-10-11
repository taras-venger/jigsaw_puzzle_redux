import axios from 'axios';

const api = {
  getRandomImage: () =>
    axios
      .get(`https://source.unsplash.com/random/880x620`)
      .then(image => image.request.responseURL)
};

export default api;
