import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://www.fruityvice.com/api/',
  baseURL: '/api/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

const callEndpointGet = async(url:string) => {
  const response = await instance({
    method: 'GET',
    url
  })
  return response;
}


const ApiFruitsAxios = {
  getAllFruits() {
    const allFruits = callEndpointGet('fruit/all');
    return allFruits;
  }
}

export default ApiFruitsAxios;