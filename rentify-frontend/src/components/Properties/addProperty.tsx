import React, { useState } from 'react';
import propertyService from '../../services/propertyService';
import { useAuth } from '../../utils/context/AuthContext';

const AddProperty: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    place: '',
    area: '',
    numberOfBedrooms: '',
    numberOfBathrooms: '',
    hospitalsNearby: '',
    collegesNearby: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      propertyService.addProperty(user.id, formData).then((response) => {
        console.log('Property added successfully:', response.data);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="place" value={formData.place} onChange={handleChange} placeholder="Place" required />
      <input type="text" name="area" value={formData.area} onChange={handleChange} placeholder="Area" required />
      <input type="number" name="numberOfBedrooms" value={formData.numberOfBedrooms} onChange={handleChange} placeholder="Number of Bedrooms" required />
      <input type="number" name="numberOfBathrooms" value={formData.numberOfBathrooms} onChange={handleChange} placeholder="Number of Bathrooms" required />
      <input type="text" name="hospitalsNearby" value={formData.hospitalsNearby} onChange={handleChange} placeholder="Hospitals Nearby" />
      <input type="text" name="collegesNearby" value={formData.collegesNearby} onChange={handleChange} placeholder="Colleges Nearby" />
      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddProperty;
