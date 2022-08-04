// == Import
import axios from 'axios';

const requestReposList = async (searchInputTextValue) => {
  try {
    console.log(`url : https://api.github.com/search/repositories?q=${searchInputTextValue}`);
    return await axios.get(
      'https://api.github.com/search/repositories',
      {
        params: {
          q: searchInputTextValue,
        },
      },
    );
  }
  catch (error) {
    console.error(error);
    return [];
  }
};

export default requestReposList;
