import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const HomeIntroProfile = () => {

  const {userLoginDetail,setUserLoginDetail,userDetails,setUserDetails} = useContext(UserContext)

  console.log(userDetails.name)

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-between px-4" style={{ backgroundImage: "url('https://i.pinimg.com/564x/54/73/64/5473647fadac758c01abf81fb641a427.jpg')" }}>
      
      {/* Profile Picture and Greeting */}
      <div>
        <div className="absolute top-5 left-5">
            <Link to="/profile">
            <h2 className="text-5xl font-bold text-red-500" >Hello {userDetails.name.toUpperCase()}👋</h2>
            </Link>
        </div>
        
        {/* Profile Picture */}
        <div className="absolute right-5 top-5">
            <Link to="/profile">
            <img 
                src="https://via.placeholder.com/150" 
                alt="Profile" 
                className="w-14 h-14 rounded-full shadow-lg mb-4" 
            />
            </Link>
        </div>
      </div>

      {/* Buttons for Donation and Request */}
      <div className="mt-6 mb-10 flex space-x-4">
        <Link to="/donateBlood" className="bg-white text-red-500 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
          Donate Blood
        </Link>
        <Link to="/requestBlood" className="bg-white text-red-500 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105">
          Request Blood
        </Link>
      </div>

    </div>
  );
};

export default HomeIntroProfile;
