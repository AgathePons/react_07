// == Import
import axios from 'axios';

const requestReposList = async (searchInputTextValue) => {
  try {
    console.log(`url : https://api.github.com/search/repositories?q=${searchInputTextValue}`);
    return await axios.get(`https://api.github.com/search/repositories?q=${searchInputTextValue}`);
  }
  catch (error) {
    console.error(error);
  }
};

export default requestReposList;
