import { useState, useEffect } from 'react';

const useNetworkSpeed = () => {
  const [speed, setSpeed] = useState(null);

  const getNetworkSpeed = () => {
    console.log('speed check...');
    if (navigator.connection && navigator.connection.downlink) {
      const downlinkSpeed = navigator.connection.downlink;
      setSpeed(downlinkSpeed);
    } else {
      setSpeed(null);
    }
  };

  useEffect(() => {
    // Initial network speed check
    getNetworkSpeed();

    // Set up interval for periodic updates
    const intervalId = setInterval(() => {
      getNetworkSpeed();
    }, 1000); // Update every 10 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  return `${speed} Mbps`;
};

export default useNetworkSpeed;
