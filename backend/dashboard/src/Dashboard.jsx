import React ,{useEffect, useState} from "react";
import axios from 'axios'

const Dashboard = () => {
    const [donors, setDonors] = useState([]);

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async()=>{
    try {
      const response = await axios.get('http://localhost:8000/get')
      console.log(response.data)
      setDonors(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  // Delete a donor from the database
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/delete/${id}`);
      // Remove the deleted donor from the local state
      setDonors((prevDonors) => prevDonors.filter((donor) => donor._id !== id));
      console.log("Donor deleted successfully");
    } catch (error) {
      console.error("Error deleting donor:", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
    
      {/* Main Section */}
      <div className="main-section">
        <header>
          <h1>Blood Donors</h1>
        </header>

        {/* Donor List */}
        <div className="donor-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Blood Group</th>
                <th>Age</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Posted On</th>
                <th>Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor) => (
                <tr key={donor._id}>
                  <td>{donor.name}</td>
                  <td>{donor.bloodGroup}</td>
                  <td>{donor.age}</td>
                  <td>{donor.address || donor.location}</td>
                  <td>{donor.contact}</td>
                  <td>{donor.PostedOn}</td>
                  <td style={{background:donor.type === 'blood-donor' ? 'rgb(177, 235, 139)' : 'rgb(255, 173, 134)'}}>{donor.type}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(donor._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {donors.length === 0 && (
                <tr>
                  <td colSpan="6" className="no-data">
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    </div>
    </div>
  )}


export default Dashboard;
