import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/SideBar';

const ViewData = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/getallfood');
      setFoods(response.data);
    } catch (error) {
      console.log('Error fetching foods:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/deleteData/${id}`);
      alert("Data Deleted Successfully");
      fetchFoods();
    } catch (error) {
      console.log('Error deleting food:', error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Page Content */}
      <div className="flex justify-center mt-10">
        <div className="w-1/2 p-6 border rounded-lg shadow-lg overflow-x-auto">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Food List</h2>

            <a
              href="/adddata"
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
                  <td colSpan="4" className="text-center py-4">
                    No data found
                  </td>
                </tr>
              ) : (
                foods.map((food) => (
                  <tr key={food._id} className="hover:bg-gray-200">
                    <td className="py-3 px-4 border">{food.fname}</td>
                    <td className="py-3 px-4 border">{food.price}</td>
                    <td className="py-3 px-4 border">
                      {food.available ? "Yes" : "No"}
                    </td>
                    <td className="py-3 px-4 border space-x-2">
                      <a
                        href={`/editdata/${food._id}`}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 inline-block"
                      >
                        Edit
                      </a>

                      <button
                        onClick={() => handleDelete(food._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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
    </>
  );
};

export default ViewData;