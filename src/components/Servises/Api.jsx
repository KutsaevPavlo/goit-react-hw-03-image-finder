import axios from 'axios';

export const fetchArticlesWithQuery = async (searchQuery, queryPage) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: `33373070-0a3de92214998aff69d545527`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 4,
  });

  const response = await axios.get(
    `${BASE_URL}?${searchParams}&q=${searchQuery}&page=${queryPage}`
  );
  return response.data.hits;
};

export default {
  fetchArticlesWithQuery,
};

// export default class ImgApi {
//   state = {
//     queryPage: 1,
//     searchQuery: '',
//     countImg: 0,
//   };

//     this.incrementPage();
//     return response.data;
//   }

//   resetPage() {
//     this.queryPage = 1;
//   }

//   incrementPage() {
//     this.queryPage += 1;
//   }
// }
