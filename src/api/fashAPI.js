import axios from 'axios'

const FASH_API = 'http://127.0.0.1:8000';


const createUser = async (user) => {
    try {
      const response = await axios.post(`${FASH_API}/users/insert-user`, user);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export { createUser };