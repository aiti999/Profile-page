import React from 'react';
import Profile from './components/Profile';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.jpg')" }}>
      <Profile />
    </div>
   
  );
};

export default App;
