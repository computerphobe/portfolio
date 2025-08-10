"use client"
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from './type.module.css';

const TypingEffect = () => {
  // Create a ref for the element where Typed.js will run
  const typedElementRef = useRef(null);
  useEffect(() => {
    // Configure Typed.js
    const typed = new Typed(typedElementRef.current, {
      strings: [
        "System initializing...", 
        "Access granted ✓", 
        "Welcome to the terminal", 
        "Type 'help' to explore"
      ],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '▊',
    });

    // Clean up when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className={styles.typingContainer}>
      <span ref={typedElementRef}></span>
    </div>
  );
};

export default TypingEffect;