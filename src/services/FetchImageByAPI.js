import axios from 'axios';

const KEY = '21320653-fe4a570a23bb891fd74acd9f9';

const FetchImageByAPI = ({ query = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${ pageSize}`,
  )
      
    .then(response => response.data.hits);
};

export default FetchImageByAPI; 