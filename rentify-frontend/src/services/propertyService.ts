import axios from 'axios';
import { BASE_URL } from './queryService';

const API_URL = '/api/v1/properties';

interface Property {
  place: string;
  area: string | number;
  numberOfBedrooms: string | number;
  numberOfBathrooms: string | number;
  hospitalsNearby: string;
  collegesNearby: string;
}

const addProperty = (userId: number, property: Property) => {
  return axios.post(`${BASE_URL}${API_URL}/user/${userId}`, property);
};

const getPropertiesByOwner = (ownerId: number) => {
  return axios.get(`${BASE_URL}${API_URL}/owner/${ownerId}`);
};

const getAllProperties = () => {
  return axios.get(BASE_URL + API_URL);
};

const updateProperty = (propertyId: number, property: Property) => {
  return axios.put(`${BASE_URL}${API_URL}/${propertyId}`, property);
};

const deleteProperty = (propertyId: number) => {
  return axios.delete(`${BASE_URL}${API_URL}/${propertyId}`);
};

export default {
  addProperty,
  getPropertiesByOwner,
  getAllProperties,
  updateProperty,
  deleteProperty,
};
