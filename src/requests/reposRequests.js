// == Import
import axios from 'axios';

const requestReposList = async (searchInputTextValue, page = 1, perPage = 9) => {
  try {
    console.log(`url : https://api.github.com/search/repositories?q=${searchInputTextValue}`);
    return await axios.get(
      'https://api.github.com/search/repositories',
      {
        params: {
          q: searchInputTextValue,
          sort: 'stars',
          page: page,
          per_page: perPage,
        },
      },
    );
  }
  catch (error) {
    console.error(error.response);
    return false;
  }
};

export default requestReposList;
