// HomePage.js
"use client";
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

// Utility function to select a random image
const getRandomImage = (images) => {
  return images[Math.floor(Math.random() * images.length)];
};

const HomePage = () => {
  const images = useMemo(() => ["toad", "toad2", "toad3"], []); // Memoized image list
  const [bgImage, setBgImage] = useState(getRandomImage(images));

  useEffect(() => {
    setBgImage(getRandomImage(images));
  }, [images]); // This effect will only run once as images is memoized.

  return (
    <div className="relative h-screen w-full">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`/${bgImage}.jpeg`} // Path to your images
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={100}
          alt="Background Image"
        />
      </div>

      {/* Contenu par-dessus l'image */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Link href="/kd/cartes/mayotte">
          <ButtonStyled>Paré au décollage</ButtonStyled>
        </Link>
      </Box>
    </div>
  );
};

// Styled component for the button to keep JSX clean
const ButtonStyled = () => (
  <Button
    variant="contained"
    sx={{
      "&:hover": { backgroundColor: "blue" },
      opacity: 1,
      fontWeight: "bold",
      fontSize: "20px",
    }}
  >
    Paré au décollage
  </Button>
);

export default HomePage;
