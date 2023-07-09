import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID A-B6vdgLGZQdQlEfPTIKg11ERkBknvbJBKkTNKRYi0w',
    },
    params: {
      query: term,
      page: 1,
      per_page: 30,
    },
  });

  return response.data.results;
};

export default searchImages;
