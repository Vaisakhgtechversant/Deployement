import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <div className="min-h-screen bg-white-900 flex items-center justify-center">
            <div className='w-150 flex flex-col w-96 shadow-lg p-6 rounded-2xl bg-blue-400 w-50'>
                <form >
                    <div className='mb-4'>
                        <label className="block mb-3 flex-col text-sm font-medium text-white">Username</label>
                        <input
                            type="text"
                            className="w-137 p-2 rounded mb-4 bg-gray-700 text-white"
                            placeholder="Enter your name"
                            input />
                    </div>
                    <div className='mb-4'>
                        <label className="block mb-3 flex-col text-sm font-medium text-white">Email</label>
                        <input
                            type="email"
                            className="w-137 p-2 rounded mb-4 bg-gray-700 text-white"
                            placeholder="Enter your email"
                            input />
                    </div>


                    <div className='mb-4'>
                        <label className="block mb-3 flex-col text-sm font-medium text-white">Password</label>
                        <input
                            type="text"
                            className="w-137 p-2 rounded mb-4 bg-gray-700 text-white"
                            placeholder="Enter your password"
                            input />
                    </div>
                    <div className='flex justify-center'>
                        <button className="bg-green-500 text-white py-2 px-6 w-50 rounded hover:bg-green-600 transition-colors">
                            Login
                        </button>
                    </div>
                    <div className='px- flex flex-col justify-center mt-4'>
                        <Link
                            to="/login"
                            className="ml-4 text-white underline hover:opacity-80 self-center"
                        >
                            Already havea an account? Login
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Register