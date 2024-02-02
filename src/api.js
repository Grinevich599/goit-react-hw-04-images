import axios from 'axios';

const KEY = '40669349-8b3833151bb6b3e237d7939fc';
const pageLimit = 12;
axios.defaults.baseURL = 'https://pixabay.com/api/';


export const requestImages = async (query, page) => {
  const { data } = await axios({
    params: {
      key: KEY,
      q: query,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: pageLimit,
    },
  });
  return data;
};


// export const requestImages = async (query, page) => {
//   const { data } = await axios.get(
//     `https://pixabay.com/api/?q=${query}&page=${page}&key=40669349-8b3833151bb6b3e237d7939fc&image_type=photo&orientation=horizontal&per_page=12`
//   );
  
//   return data;
  
// };