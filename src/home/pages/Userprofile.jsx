import React, { useState, useEffect } from 'react';
import Navbar from '../layouts/Navbar';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
const cookies = new Cookies();

function Userprofile() {
  const [extraData, setExtraData] = useState([]); 
  const [Education, setEducation] = useState('');
  const [WorkExperience, setWorkExperience] = useState('');
  const [bio, setBio] = useState('');
  const [MySocials, setMySocials] = useState('');
  const userInfo = cookies.get('user');
  const userId = userInfo.id;

  useEffect(() => {
    const fetchExtraData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/getExtra/${userId}`);
        setExtraData(response.data.data);
      } catch (error) {
        console.error('Error fetching extra data:', error);
      }
    };
  
    fetchExtraData();
  }, [userId, Education, WorkExperience, bio, MySocials]);

  const handlePersonalInfoSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = userInfo.id;
      const response = await axios.post('http://127.0.0.1:8000/api/extra', {
        idUser: userId,
        Education: Education,
        WorkExperience: WorkExperience,
        bio: bio,
        MySocials: MySocials,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data.message);

    } catch (error) {
      console.error('Error submitting data:', error);
    }

    const fetchExtraData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/getExtra/${userId}`);
        setExtraData(response.data.data);
      } catch (error) {
        console.error('Error fetching extra data:', error);
      }
    };
  
    fetchExtraData();
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4 flex flex-col md:flex-row">
   
      <div className="mb-4 flex flex-col items-center justify-center bg-white border rounded p-4 md:mr-4 md:w-1/4" style={{height:'300px'}}>
      <div style={{ background: 'darkviolet', color: 'white', fontSize: '60px' }} className="rounded-full w-24 h-24 flex items-center justify-center bg-darkviolet text-3xl font-bold mb-2">
        {userInfo.name.charAt(0).toUpperCase()}
      </div>
      <hr className="my-2 w-full border-t border-gray-800" />
      <h1 className="text-2xl font-bold">{userInfo.name}</h1>
      <p className="text-gray-600">{userInfo.email}</p>
      
      <Link to='/update'  >
      <button className="px-4 py-2 rounded mt-2 bg-darkviolet text-white" style={{background:'darkviolet'}}>
      Edit profile <i className="fa-solid fa-pen-to-square ml-1"></i>
    </button>
      </Link>
    </div>
    <div>
    <div>
    <div>
   
            </div>
    
    </div></div>

        {/* Navigation */}
        <nav className="mb-8 md:w-1/4 md:ml-4" style={{width:'50%'}}>
          <a className="text-gray-700 hover:text-black focus:text-black focus:outline-none">About</a>
          <a className="text-gray-700 hover:text-black focus:text-black focus:outline-none">My courses</a>
          <a className="text-gray-700 hover:text-black focus:text-black focus:outline-none">My score</a>
          <a className="text-gray-700 hover:text-black focus:text-black focus:outline-none">My favorite</a>
          <a className="text-gray-700 hover:text-black focus:text-black focus:outline-none">Account</a>
         
        </nav>

        {/* Profile Form */}
        <div className="w-full md:w-1/2">
          <div className="border rounded p-4 mb-4">
            <h1 className="text-2xl border-b-2 border-dashed pb-2 mb-4">Complete your profile (100% Complete)</h1>

            <div>
              <h1 className="text-xl font-bold">My Personal Information</h1>
              <button
                className=" px-4 py-2 rounded mt-2 float-right bg-darkviolet"
                style={{color:'darkviolet'}}
              >
                Edit <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <h2 className="text-xl font-bold mt-4">{userInfo.name}</h2>
              <input
                type="text"
           
                placeholder="Add a Bio to your profile"
                className="border rounded w-full py-2 px-3 mt-2 transition duration-300 ease-in-out"
                onChange={(e) => setBio(e.target.value)}
                style={{ borderColor: 'darkviolet' }}
              />
              <ol className="list-decimal pl-6 space-y-4">
            {Array.isArray(extraData) && extraData.map((e, i) => (
              <li key={i} className="flex items-center space-x-2">
                <div className="bg-brightGreen text-white rounded-full p-2">
                  <i className="fas fa-check" style={{color:'lightgreen'}}></i>
                </div>
                <p className="text-lg">{e.bio}</p>
              </li>
            ))}
          </ol>

              <label className="block mt-2">My Socials</label>
              <div className="text-gray-600">
                <input
                  className="border rounded w-full py-2 px-3 mt-2 transition duration-300 ease-in-out"
                  placeholder="Add your links social media "
                  onChange={(e) => setMySocials(e.target.value)}
                />
                
              </div>
              <ol className="list-decimal pl-6 space-y-4">
  {Array.isArray(extraData) && extraData.map((e, i) => (
    <li key={i} className="flex items-center space-x-2">
      <div className="bg-brightGreen text-white rounded-full p-2">
        <i className="fas fa-check" style={{color:'lightgreen'}}></i>
      </div>
      <a className="text-lg" href={e.MySocials} >{e.MySocials}</a>
    </li>
  ))}
</ol>

            

              
          </div></div>

          {/* Work Experience Form */}
          <div className="border rounded p-4 mb-4">
            <h1 className="text-xl font-bold">Work Experience</h1>
            <button
              className=" px-4 py-2 rounded mt-2 float-right bg-darkviolet"
              style={{color:'darkviolet'}}
            >
              Add <i className="fa-solid fa-plus"></i>
            </button>
            <div className="text-gray-600">
              <input
                className="border rounded w-full py-2 px-3 mt-2 transition duration-300 ease-in-out"
                placeholder="Add your job experiences "
                onChange={(e) => setWorkExperience(e.target.value)}
              />
            </div>
            <ol className="list-decimal pl-6 space-y-4">
            {Array.isArray(extraData) && extraData.map((e, i) => (
              <li key={i} className="flex items-center space-x-2">
                <div className="bg-brightGreen text-white rounded-full p-2">
                  <i className="fas fa-check" style={{color:'lightgreen'}}></i>
                </div>
                <p className="text-lg">{e.WorkExperience}</p>
              </li>
            ))}
          </ol>
          </div>

          {/* Education Form */}
          <div className="border rounded p-4 mb-4">
            <h1 className="text-xl font-bold">Education</h1>
            
            <button
              className=" px-4 py-2 rounded mt-2 float-right bg-darkviolet"
              style={{color:'darkviolet'}}
            >
              Add <i className="fa-solid fa-plus"></i>
            </button>
            <div className="text-gray-600">
              <input
                className="border rounded w-full py-2 px-3 mt-2 transition duration-300 ease-in-out"
                placeholder="add your qualification "
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>
            <ol className="list-decimal pl-6 space-y-4">
            {Array.isArray(extraData) && extraData.map((e, i) => (
              <li key={i} className="flex items-center space-x-2">
                <div className="bg-brightGreen text-white rounded-full p-2">
                  <i className="fas fa-check" style={{color:'lightgreen',fontWeight:'bold'}}></i>
                </div>
                <p className="text-lg">{e.Education}</p>
              </li>
            ))}
          </ol>
          </div>
          <button className="text-white px-4 py-2 rounded mt-2 float-right " onClick={handlePersonalInfoSubmit} style={{marginRight:'100px',width:'250px',background:'darkviolet'}}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
