import React from 'react';

export const AIIntegrationChart = () => (
  <div className="w-full h-full flex items-end justify-around">
    <div className="w-2 bg-gradient-to-t from-gray-300 to-gray-400 rounded-t animate-pulse" style={{ height: '60%' }}></div>
    <div className="w-2 bg-gradient-to-t from-gray-300 to-gray-400 rounded-t animate-pulse" style={{ height: '80%' }}></div>
    <div className="w-2 bg-gradient-to-t from-gray-300 to-gray-400 rounded-t animate-pulse" style={{ height: '40%' }}></div>
    <div className="w-2 bg-gradient-to-t from-gray-300 to-gray-400 rounded-t animate-pulse" style={{ height: '90%' }}></div>
    <div className="w-2 bg-gradient-to-t from-gray-300 to-gray-400 rounded-t animate-pulse" style={{ height: '50%' }}></div>
    <div className="w-2 bg-gradient-to-t from-gray-300 to-gray-400 rounded-t animate-pulse" style={{ height: '80%' }}></div>
    <div className="w-2 bg-gradient-to-t from-gray-300 to-gray-400 rounded-t animate-pulse" style={{ height: '70%' }}></div>
    <div className="w-2 bg-gradient-to-t from-gray-300 to-gray-400 rounded-t animate-pulse" style={{ height: '90%' }}></div>
    <div className="w-2 bg-gradient-to-t from-gray-300 to-gray-400 rounded-t animate-pulse" style={{ height: '45%' }}></div>
    <div className="w-2 bg-gradient-to-t from-gray-300 to-gray-400 rounded-t animate-pulse" style={{ height: '70%' }}></div>
  </div>

);

export const CloudArchitectureGraph = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <path
        d="M10,50 Q50,0 90,50 Q50,100 10,50"
        fill="none"
        stroke="rgb(209 213 219)"
        strokeWidth="1"
        className="animate-[dash_3s_ease-in-out_infinite]"
        strokeDasharray="300"
        strokeDashoffset="300"
      />
      <path
        d="M20,50 Q50,20 80,50 Q50,80 20,50"
        fill="none"
        stroke="rgb(156 163 175)"
        strokeWidth="1"
        className="animate-[dash_3s_ease-in-out_infinite]"
        strokeDasharray="200"
        strokeDashoffset="200"
      />
    </svg>
  </div>
);

export const SecurityShieldAnimation = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
      <div className="absolute inset-2 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full animate-ping"></div>
      <div className="absolute inset-4 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full"></div>
    </div>
  </div>
);

export const PerformanceGraph = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <path
          d="M10,90 L30,70 L50,80 L70,30 L90,10"
          fill="none"
          stroke="rgb(156 163 175)"
          strokeWidth="2"
          className="animate-[draw_3s_ease-in-out_infinite]"
          strokeDasharray="200"
          strokeDashoffset="200"
        />
      </svg>
    </div>
  </div>
);
