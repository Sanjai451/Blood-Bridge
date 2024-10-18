import React from 'react';

const EligibilityInfo = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Before Donating Blood, You Should Be Aware of the Following:</h2>

      {/* Eligibility Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Eligibility</h3>
        <p>You must meet certain eligibility guidelines, such as:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Being between 18 and 65 years old.</li>
          <li>Weighing at least 50 kg.</li>
          <li>Being in good health.</li>
          <li>Avoiding donation if you have a cold, flu, or other infection.</li>
        </ul>
      </div>

      {/* ID Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">ID</h3>
        <p>You'll need to bring a valid ID, such as a driver's license or passport, to your donation appointment.</p>
      </div>

      {/* Medical History Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Medical History</h3>
        <p>You'll be asked questions about your health history, medications, and travel. You'll also have a mini-physical, which includes:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Taking your blood pressure.</li>
          <li>Checking your pulse.</li>
          <li>Measuring your temperature.</li>
        </ul>
      </div>

      {/* Blood Tests Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Blood Tests</h3>
        <p>Your blood will be tested for:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Blood type and Rh factor.</li>
          <li>Bloodborne diseases like hepatitis and HIV.</li>
        </ul>
      </div>

      {/* Food and Hydration Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Food and Hydration</h3>
        <p>You should eat a healthy meal and stay hydrated before donating. Protein-rich foods, such as:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Eggs</li>
          <li>Chicken</li>
          <li>Fish</li>
          <li>Nuts</li>
          <li>Seeds</li>
        </ul>
      </div>

      {/* Medications Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Medications</h3>
        <p>Most medications won't disqualify you from donating, but you might need to wait a period after your last dose.</p>
      </div>
    </div>
  );
};

export default EligibilityInfo;
