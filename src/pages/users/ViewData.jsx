import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewData = () => {
    const [foods, setFoods] = useState([]);
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState('');
    useEffect(() => {
        fetchFoods();
    }, []);
    const fetchFoods = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/getallfood');
            setFoods(response.data);   // assuming API returns array
        } catch (error) {
            console.log('Error fetching foods:');
            console.error(error);
        }
    };
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/deleteData/${id}`);
            alert("Data Deleted Successfully");
            fetchFoods(); // Refresh the list after deletion
        } catch (error) {
            console.log('Error deleting food:');
            console.error(error);
        }
    }
    return (

        <div className="flex justify-center mt-10">
            <div className="w-1/2 p-6 border rounded-lg shadow-lg overflow-x-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Food List</h2>

                    <a
                        href="/adddata"  // replace with your link
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
                    >
                        Add Data
                    </a>
                </div>

                <table className="w-full border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 border text-left">Food Name</th>
                            <th className="py-3 px-4 border text-left">Price</th>
                            <th className="py-3 px-4 border text-left">Available</th>
                            <th className="py-3 px-4 border text-left">Actions</th>

                        </tr>
                    </thead>

                    <tbody>
                        {foods.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="text-center py-4">
                                    No data found
                                </td>
                            </tr>
                        ) : (
                            foods.map((food) => (
                                <tr className="hover:bg-gray-200">
                                    <td className="py-3 px-4 border">{food.fname}</td>
                                    <td className="py-3 px-4 border">{food.price}</td>
                                    <td className="py-3 px-4 border">
                                        {food.available ? "Yes" : "No"}
                                    </td>
                                    <td className="py-3 px-4 border">
                                        <a
                                            href={`/editdata/${food._id}`} // Replace with your edit page route
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
                                        >
                                            Edit
                                        </a>
                                        <button
                                            onClick={() => handleDelete(food._id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

            </div>
        </div>

    )
}

export default ViewData