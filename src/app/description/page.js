"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MiniDrawer from "@/components/Sidebar/Bar";

const Page = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <MiniDrawer
        open={drawerOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
      />
      <div
        style={{
          flexGrow: 1,
          paddingLeft: drawerOpen ? 240 : 0,
          transition: "padding-left 0.3s ease",
        }}
      >
        <Box m="20px">
          <Accordion
            defaultExpanded
            sx={{ backgroundColor: "#011F26", color: "white" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">Ajouter les détections algorithme</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                on veut les algos
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            defaultExpanded
            sx={{ backgroundColor: "#011F26", color: "white" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">
                Mettre Sentinel2 sur geoserver et intégrer sur app
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Certaines images des data raw sont corrompues
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            defaultExpanded
            sx={{ backgroundColor: "#011F26", color: "white" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">Permettre une sélection par ilot</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Need une petite base de donéne avec une table codeilot centreilot permettant de zoomer la carte
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            defaultExpanded
            sx={{ backgroundColor: "#011F26", color: "white" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">Double prédiction</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               Prédite sur Sentinel 2 et sur Plkeiades pour bucher les trous ?
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Box>
      </div>
    </div>
  );
};

export default Page;
