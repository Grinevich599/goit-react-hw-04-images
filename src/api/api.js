import axios from 'axios';

const KEY = '40508767-6cd82c1efe9e2d82c03812311';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchImagesWithQuery = async (searchQuery, page = 1) => {
  const params = {
    q: searchQuery,
    page: page,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };
  const response = await axios.get('', { params });
  return response.data.hits;
};
