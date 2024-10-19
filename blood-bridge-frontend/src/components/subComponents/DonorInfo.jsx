import React from 'react';

const DonorInfo = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Become a Donor</h2>
      
      <p className="text-lg mb-6">
        Thank you for considering becoming a blood donor! By joining our platform as a donor, you'll have the opportunity to save lives by donating blood when it's needed the most.
      </p>
      
      {/* Notification Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h3 className="text-xl font-semibold text-red-500 mb-2">Stay Notified</h3>
        <p className="text-md">
          Once you register as a donor, we will notify you about:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Upcoming blood donation camps in your area.</li>
          <li>Urgent requests from patients who need blood immediately.</li>
        </ul>
        <p className="mt-4">
          We will make sure to keep you updated with all the important information through your preferred contact methods (email, SMS, or in-app notifications).
        </p>
      </div>

      {/* Rewards and Benefits Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-green-500 mb-2">Earn Points and Get Rewards!</h3>
        <p className="text-md">
          Every time you donate blood through our platform, you will earn points which can be redeemed for exclusive rewards. Benefits include:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Points for every donation, which can be redeemed for vouchers, discounts, and other rewards.</li>
          <li>Special recognition badges as you reach donation milestones.</li>
          <li>Priority notifications for blood donation camps.</li>
          <li>Exclusive offers from our partner organizations for active donors.</li>
        </ul>
        <p className="mt-4">
          Join us today and make a positive impact while enjoying benefits for your generosity!
        </p>
      </div>
      
    </div>
  );
};

export default DonorInfo;
