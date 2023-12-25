import { useEffect, useRef } from 'react';

const useCamera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    setupCamera();

    // Cleanup function to stop the camera when the component unmounts
    return () => {
    const currentVideoRef = videoRef.current; 
    if (currentVideoRef && currentVideoRef.srcObject) {
      const tracks = currentVideoRef.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
    };
  }, [videoRef]);

  return {videoRef};
};

export default useCamera;
