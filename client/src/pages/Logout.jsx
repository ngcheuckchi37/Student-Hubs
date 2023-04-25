import { useStateContext } from '../context';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function Logout() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { disconnect } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      // Cleanup function
    };
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('wallet_requestPermissions', [{ eth_accounts: {} }]);
      await disconnect();
      setIsLoggingOut(false);
      navigate('/');
    } catch (error) {
      console.log('Error logging out:', error);
      setIsLoggingOut(false);
    }
  };

  return (
    <div
      className="h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url('https://www.easthalldesign.com/wp-content/uploads/2019/10/ai-website-design-and-marketing.jpg')`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-gray-900 bg-opacity-70">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6">Are you sure you want to switch Metamask account?</h1>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {isLoggingOut ? 'Loading...' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
