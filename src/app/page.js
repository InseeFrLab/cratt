// HomePage.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

const HomePage = () => {
  const [bgImage, setBgImage] = useState("toad");

  useEffect(() => {
    const images = ["toad", "toad2", "toad3"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBgImage(randomImage);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`/${bgImage}.jpeg`} // Remplacez avec votre chemin d'image
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          alt="Image de fond"
        />
      </div>
      {/* Contenu par-dessus l'image */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Link href="/kd/cartes/martinique">
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
        </Link>
      </Box>
    </div>
  );
};

export default HomePage;
