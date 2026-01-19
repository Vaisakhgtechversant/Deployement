import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddData = () => {
    const navigate = useNavigate();
  
  const [fname, setfname] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (!fname || !price || !available) {
      alert("Please fill in all fields");
      return;
    }
    const data = { fname, price, available };

    const result = await axios.post('http://localhost:8000/api/addData', data);
    alert("Data Added Successfully");
navigate('/viewdata');
    console.log({ fname, price, available });
  }
  return (
    <div>
      <div className="p-4 border-2 flex flex-col items-center justify-center mt-10 mx-auto w-1/3 shadow-lg rounded-lg">
        <h1 className='text-3xl font-bold bg-blue-300 p-4'>AddData Page</h1>

        <form onSubmit={handleSubmit} className="w-full mt-4">                
          <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">Food Name</label>
          <input value={fname}
              onChange={(e) => setfname(e.target.value)} type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Price</label>
            <input value={price}
                onChange={(e) => setPrice(e.target.value)} type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Available</label>
            <input value={available}
                onChange={(e) => setAvailable(e.target.value)} type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Data</button>

        </form>
      </div>
    </div>
  )
}

export default AddData