import axios from 'axios';

const API_URL = 'https://api.coinlore.net/api/tickers/';

export const getCryptos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data.slice(0, 4); // Ambil 4 item pertama
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
