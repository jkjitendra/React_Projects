import axios from 'axios';
import { BASE_URL } from './queryService';

const API_URL = '/api/v1/interests';

interface Interest {
  propertyId: number;
  buyerId: number;
}

const addInterest = (interest: Interest) => {
  return axios.post(BASE_URL + API_URL, interest);
};

const getInterestsByProperty = (propertyId: number) => {
  return axios.get(`${BASE_URL}${API_URL}/property/${propertyId}`);
};

const getInterestsByBuyer = (buyerId: number) => {
  return axios.get(`${BASE_URL}${API_URL}/buyer/${buyerId}`);
};

const deleteInterest = (interestId: number) => {
  return axios.delete(`${BASE_URL}${API_URL}/${interestId}`);
};

export default {
  addInterest,
  getInterestsByProperty,
  getInterestsByBuyer,
  deleteInterest,
};
