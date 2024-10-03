import React from 'react';
import logo from '../../public/sign.png'

const HomePage = () => {
  return (
    <div className="text-white font-myFont w-full h-screen text-center relative">
        {/* Circle Logo */}
        <div className="absolute m-8 top-4 left-12 w-64 h-64">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>

        <h1 className="flex justify-center text-9xl mt-12">Freaky Food</h1>
        <ul className="flex justify-center mt-6 space-x-10 text-4xl">
            <li>Explore</li>
            <li>Top Picks</li>
            <li>About</li>
            <li>Profile</li>
        </ul>
        {/* need sign and then logo comes to 'help'*/}
    </div>
  );
};

export default HomePage;
