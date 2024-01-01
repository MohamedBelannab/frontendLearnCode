// Import necessary libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Navbar from '../layouts/Navbar';

const cookies = new Cookies();


const UpdateExtraUser = () => {
  // Get user information from cookies
  const userInfo = cookies.get('user');
  const userId = userInfo.id;

  
  const navigate = useNavigate();


  const [extraUsers, setExtraUsers] = useState([]);
  const [selectedExtraUserId, setSelectedExtraUserId] = useState(null);

  const [updatedEducation, setUpdatedEducation] = useState('');
  const [updatedWorkExperience, setUpdatedWorkExperience] = useState('');
  const [updatedBio, setUpdatedBio] = useState('');
  const [updatedMySocials, setUpdatedMySocials] = useState('');

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);


  useEffect(() => {
    const fetchExtraUsers = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/getExtra/${userId}`);
        setExtraUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching extra users data:', error);
      }
    };

    fetchExtraUsers();
  }, [userId]);

  const handleUpdateClick = (extraUserId) => {
    setSelectedExtraUserId(extraUserId);

    const selectedUser = extraUsers.find((user) => user.id === extraUserId);

    if (selectedUser) {
      setUpdatedEducation(selectedUser.Education);
      setUpdatedWorkExperience(selectedUser.WorkExperience);
      setUpdatedBio(selectedUser.bio);
      setUpdatedMySocials(selectedUser.MySocials);
    }
  };

 
  const handleCancelUpdate = () => {
    setSelectedExtraUserId(null);
  };


  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/extrauser/${selectedExtraUserId}`, {
        idUser: userId,
        Education: updatedEducation,
        WorkExperience: updatedWorkExperience,
        bio: updatedBio,
        MySocials: updatedMySocials,
      });

      console.log(response.data.message);
      setSelectedExtraUserId(null);

      const updatedResponse = await axios.get(`http://127.0.0.1:8000/api/getExtra/${userId}`);
      setExtraUsers(updatedResponse.data.data);
    } catch (error) {
      console.error('Error updating extra user data:', error);
    }
  };

  const handleDeleteClick = (extraUserId) => {
    setDeleteUserId(extraUserId);
    setShowDeleteConfirmation(true);
  };

  // Function to handle delete cancel
  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
    setDeleteUserId(null);
  };


  const handleDeleteConfirm = async () => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/extrauser/${deleteUserId}`);
      console.log(response.data.message);

      const updatedResponse = await axios.get(`http://127.0.0.1:8000/api/getExtra/${userId}`);
      setExtraUsers(updatedResponse.data.data);

      setShowDeleteConfirmation(false);
      setDeleteUserId(null);
    } catch (error) {
      console.error('Error deleting extra user:', error);
    }
  };


  return (
  <div>
        <Navbar/>
        <div className="container mx-auto p-4">
   
        <h1 className="text-2xl font-bold mb-4">Update Extra User Information</h1>
        <table className="min-w-full border rounded overflow-hidden">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Education</th>
              <th className="py-2 px-4">Work Experience</th>
              <th className="py-2 px-4">Bio</th>
              <th className="py-2 px-4">My Socials</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {extraUsers.map((extraUser) => (
              <tr key={extraUser.id} className={selectedExtraUserId === extraUser.id ? 'bg-gray-200' : ''}>
                <td className="py-2 px-4">{extraUser.id}</td>
                <td className="py-2 px-4">{extraUser.Education}</td>
                <td className="py-2 px-4">{extraUser.WorkExperience}</td>
                <td className="py-2 px-4">{extraUser.bio}</td>
                <td className="py-2 px-4">{extraUser.MySocials}</td>
                <td className="py-2 px-4">
                  {selectedExtraUserId === extraUser.id ? (
                    <div className="space-x-2">
                      <input
                        type="text"
                        value={updatedEducation}
                        onChange={(e) => setUpdatedEducation(e.target.value)}
                        className="border p-1 rounded"
                      />
                      <input
                        type="text"
                        value={updatedWorkExperience}
                        onChange={(e) => setUpdatedWorkExperience(e.target.value)}
                        className="border p-1 rounded"
                      />
                      <input
                        type="text"
                        value={updatedBio}
                        onChange={(e) => setUpdatedBio(e.target.value)}
                        className="border p-1 rounded"
                      />
                      <input
                        type="text"
                        value={updatedMySocials}
                        onChange={(e) => setUpdatedMySocials(e.target.value)}
                        className="border p-1 rounded"
                      />
                      <button
                        className="bg-green-500 text-white py-1 px-2 rounded"
                        onClick={handleUpdate}
                      >
                        Save
                      </button>
                      <button
                        className="bg-red-500 text-white py-1 px-2 rounded"
                        onClick={handleCancelUpdate}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="space-x-2">
                      <button
                        className="bg-blue-500 text-white py-1 px-2 rounded"
                        onClick={() => handleUpdateClick(extraUser.id)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 text-white py-1 px-2 rounded"
                        onClick={() => handleDeleteClick(extraUser.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {showDeleteConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-4 rounded">
              <p>Are you sure you want to delete this extra user?</p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded mr-2"
                  onClick={handleDeleteCancel}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 text-white py-1 px-2 rounded"
                  onClick={handleDeleteConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
  </div>
  );
};

// Export the component
export default UpdateExtraUser;
