import React, { useState, useEffect, useRef } from 'react';
import { Camera } from '../types';
import { Power, Settings, Maximize2 } from 'lucide-react';

const mockCameras: Camera[] = [
  {
    id: 'CAM-001',
    name: 'Main Entrance',
    location: 'Front Gate',
    status: 'online',
    stream: 'local', // Local camera stream
  },
  {
    id: 'CAM-002',
    name: 'Parking Area',
    location: 'North Side',
    status: 'online',
    stream: 'local',
  },
  {
    id: 'CAM-003',
    name: 'Back Door',
    location: 'Rear Exit',
    status: 'offline',
    stream: 'https://unsplash.it/802/450',
  },
];

const VideoStream = () => {
  const [selectedCamera, setSelectedCamera] = useState<Camera>(mockCameras[0]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (selectedCamera.stream === 'local') {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error('Error accessing camera:', err));
    }
  }, [selectedCamera]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold dark:text-white">Video Stream</h1>
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-green-500">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm">Live Feed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <div className="glass rounded-2xl overflow-hidden relative group">
            {selectedCamera.stream === 'local' ? (
              <video ref={videoRef} autoPlay playsInline className="w-full h-auto" />
            ) : (
              <img src={selectedCamera.stream} alt={selectedCamera.name} className="w-full h-auto" />
            )}
            <button className="absolute top-4 right-4 p-2 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="h-5 w-5 text-black" />
            </button>
          </div>

          <div className="glass rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold dark:text-white">{selectedCamera.name}</h2>
                <p className="text-sm opacity-70 dark:text-gray-300">{selectedCamera.location}</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-2">
  <button className="p-2 glass hover:bg-opacity-20 rounded-lg transition-all">
    <Settings className="h-5 w-5 dark:text-gray-300 sm:h-4 sm:w-4" />
  </button>
  <div className="flex flex-wrap items-center gap-2 sm:gap-1">
    <Power className={`h-5 w-5 sm:h-4 sm:w-4 ${selectedCamera.status === 'online' ? 'text-green-500' : 'text-red-500'}`} />
    <span className={`capitalize text-sm sm:text-xs ${selectedCamera.status === 'online' ? 'text-green-500' : 'text-red-500'}`}>
      {selectedCamera.status}
    </span>
  </div>
</div>

            </div>
          </div>
        </div>

        <div className="space-y-4">
          {mockCameras.map((camera) => (
            <button
              key={camera.id}
              onClick={() => setSelectedCamera(camera)}
              className={`w-full glass rounded-xl text-left transition-all ${
                selectedCamera.id === camera.id ? 'ring-2 ring-blue-500 bg-opacity-30' : 'hover:bg-opacity-30'
              }`}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold dark:text-white">{camera.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs glass ${
                    camera.status === 'online' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {camera.status}
                  </span>
                </div>
                <p className="text-sm opacity-70 dark:text-gray-300">{camera.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoStream;
