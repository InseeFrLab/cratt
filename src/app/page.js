// HomePage.js
"use client"
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

const HomePage = () => {
  const [bgImage, setBgImage] = useState('toad');

  useEffect(() => {
    const images = ['toad', 'toad2', 'toad3'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBgImage(randomImage);
  }, []);

  return (
    <div style={{
        backgroundImage: `url(/${bgImage}.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Link href="/kd/cartes/martinique">
        <Button variant="contained" 
        sx = {{ 
          '&:hover': { backgroundColor: 'blue' },
          opacity: 1,
          fontWeight: 'bold',
          fontSize: '20px'
        }}
        >Paré au décollage</Button>
      </Link>
    </div>
  );
};

export default HomePage;