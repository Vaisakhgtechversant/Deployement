import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditData = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const [fname, setfname] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState('');
      useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/singleData/${id}`);
        const food = res.data.data;

        setfname(food.fname);
        setPrice(food.price);
        setAvailable(food.available);
      } catch (error) {
        console.error("Failed to fetch food:", error);
      }
    };

    fetchFood();
  }, [id]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        if (!fname || !price || !available) {
            alert("Please fill in all fields");
            return;
        }
        const data = { fname, price, available };
        console.log(id);
        const result = await axios.post(`http://localhost:8000/api/updateData/${id}`, data);
        console.log(result.data);
        alert("Data Updated Successfully");
        navigate('/viewdata');
        console.log({ fname, price, available });
    }
    return (
        <div>
            <div className="p-4 border-2 flex flex-col items-center justify-center mt-10 mx-auto w-1/3 shadow-lg rounded-lg">
                <h1 className='text-3xl font-bold bg-blue-300 p-4'>Edit Page</h1>

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
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Update Data</button>

                </form>
            </div>
        </div>
    )
}

export default EditData