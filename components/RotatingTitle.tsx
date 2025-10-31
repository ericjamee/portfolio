"use client";

import { useState, useEffect } from 'react';

const titles = [
  'FULL STACK DEVELOPER',
  'PROJECT MANAGER',
  'SOFTWARE DEVELOPER',
  'INFORMATION SYSTEMS'
];

export default function RotatingTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Find the longest title to ensure proper width
  const longestTitle = titles.reduce((a, b) => a.length > b.length ? a : b);

  return (
    <div className="relative overflow-hidden inline-block text-center" style={{ minWidth: '600px' }}>
      {titles.map((title, index) => {
        const distance = (index - currentIndex + titles.length) % titles.length;
        let transform = 'translateX(0)';
        
        if (distance === 1) {
          transform = 'translateX(100%)';
        } else if (distance === titles.length - 1) {
          transform = 'translateX(-100%)';
        } else if (distance > 1 && distance <= titles.length / 2) {
          transform = 'translateX(100%)';
        } else if (distance > titles.length / 2) {
          transform = 'translateX(-100%)';
        }
        
        return (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out"
            style={{ transform }}
          >
            <p className="text-2xl sm:text-4xl text-black tracking-[0.06em] whitespace-nowrap">
              {title}
            </p>
          </div>
        );
      })}
      {/* Invisible element to set proper width based on longest title */}
      <p className="text-2xl sm:text-4xl text-transparent whitespace-nowrap">
        {longestTitle}
      </p>
    </div>
  );
}

