import React, { useState } from 'react';
import { useAuth } from '../../utils/context/AuthContext';
import { User } from '../../models/user.model';
import { redirect } from 'react-router-dom';

const Register: React.FC = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState<Omit<User, 'id'> & { password: string }>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: 'BUYER',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(formData).then(() => {
      console.log('User registered successfully');
      redirect('/login');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="BUYER">Buyer</option>
        <option value="SELLER">Seller</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
