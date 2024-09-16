import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import GridOnIcon from '@mui/icons-material/GridOn';
import DropdownList from "./DropdownList";
// Remplacez par le chemin de votre image
import Link from "next/link";
import Image from "next/image";
const drawerWidth = 240;

const links = ["/kd/description","/kd/statistiques"];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#011F26",
            color: "white",
          },
        }} // Ajoutez ces lignes
      >
        <DrawerHeader className="flex justify-end">
          {open ? (
            <IconButton
              onClick={handleDrawerClose}
              color="inherit" // Ajoutez cette ligne
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ marginLeft: "auto" }} // Ajoutez une marge à gauche
            >
              <MenuIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <h1
          className={`${
            open ? "text-6xl" : "text-xs"
          } text-red-500 italic text-center font-bold`}
        >
          CRaTToGa   
        </h1>
        {open && (
          <Image src="/toad.jpeg" alt="Logo" width={240} height={240} /> // Ajoutez cette ligne
        )}
        <Divider />
        
         
        
        <List>
          {["Description", "Statistiques ilots"].map((text, index) => (
          <Link href={links[index]} key={index}>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: 'blue', // Change this to the color you want
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {index % 2 === 0 ? (
                    <InboxIcon color="inherit" />
                  ) : (
                    <GridOnIcon color="inherit" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
          <DropdownList
            title="Cartes"
            items={open ? ["Guadeloupe","Martinique","Guyane","Reunion","Mayotte","Saint-Martin"] : ["971", "972","973","974","976","SXM"]} 
            open={open}
          />
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
