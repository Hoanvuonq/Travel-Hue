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
  
const getDestinations = async () => {
  try {
    const response = await axios.get(`${FASH_API}/destinations`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getDestinationById = async (destinationId) => {
  try {
    const response = await axios.get(`${FASH_API}/destinations/${destinationId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const generateJourney = async (userId, destinationIds) => {
  try {
    const response = await axios.post(`${FASH_API}/generate-journey`, {
      user_id: userId,
      destination_ids: destinationIds,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { createUser, getDestinations, getDestinationById, generateJourney };