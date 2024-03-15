// Dashboard.js
import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile from backend API
    // Example API call:
    fetch('/api/profile')
      .then(response => response.json())
      .then(data => setUserProfile(data))
      .catch(error => console.error('Error fetching profile:', error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {userProfile && (
        <div>
          <h2>Welcome, {userProfile.name}!</h2>
          <p>Email: {userProfile.email}</p>
          {/* Display other profile information */}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
