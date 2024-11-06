"use client"
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  // Create a ref for the element where Typed.js will run
  const typedElementRef = useRef(null);
  useEffect(() => {
    // Configure Typed.js
    const typed = new Typed(typedElementRef.current, {
      strings: ["Access granted", "Type help to start"], // Text options for typing
      typeSpeed: 100,   // Speed in milliseconds
      backSpeed: 25,   // Backspacing speed      // Loop the typing animation
    });

    // Clean up when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div>
      <span ref={typedElementRef}></span>
    </div>
  );
};

export default TypingEffect;