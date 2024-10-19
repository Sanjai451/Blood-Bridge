import React, { useDebugValue, useState } from 'react';
import axios from 'axios'

const CreateUser = () => {
    // State to hold form data
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        bloodGroup: '',
        mobile: '',
        email: '',
        city: '',
        address: '',
        password: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(userData)
            const response = await axios.post(`http://localhost:8000/insert`,userData)
            console.log(response)
            if(response.status === 200){
                alert('User created successfully!');
                setUserData({ // Reset the form
                    name: '',
                    age: '',
                    bloodGroup: '',
                    mobile: '',
                    email: '',
                    city: '',
                    address: '',
                    password: '',
                });
            }else{
                alert('Failed to create user. Please try again.');
            }         
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    // // Handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('/api/users', { // Adjust the endpoint as needed
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(userData),
    //         });

    //         if (response.ok) {
    //             alert('User created successfully!');
    //             setUserData({ // Reset the form
    //                 name: '',
    //                 age: '',
    //                 bloodGroup: '',
    //                 mobile: '',
    //                 email: '',
    //                 city: '',
    //                 address: '',
    //                 password :''
    //             });
    //         } else {
    //             alert('Failed to create user. Please try again.');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert('An error occurred. Please try again.');
    //     }
    // };

    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Create New User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={userData.age}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="bloodGroup">Blood Group</label>
                    <select
                        id="bloodGroup"
                        name="bloodGroup"
                        value={userData.bloodGroup}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="" disabled>Select your blood group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="mobile">Mobile</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={userData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={userData.city}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button type="submit" className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600">
                    Create User
                </button>
            </form>
        </div>
    );
};

export default CreateUser;
