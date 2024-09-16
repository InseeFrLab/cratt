// DropdownList.js
import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import RoomIcon from "@mui/icons-material/Room";
import Link from "next/link";

export default function DropdownList({ title, items, open }) {
  const [openScroll, setOpenScroll] = React.useState(false);

  const handleClick = () => {
    setOpenScroll(!openScroll);
  };
  const territories = ["guadeloupe","martinique", "guyane","reunion","mayotte","saint-martin"];
  return (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          onClick={handleClick}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
            '&:hover': {
                backgroundColor: 'blue', // Change this to the color you want
              }
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
            <RoomIcon color="inherit" />
          </ListItemIcon>
          <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 , // Change this to the color you want
                    }} />
          {openScroll ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openScroll} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map((item, index) => (
              <Link href={`/kd/cartes/${territories[index]}`} key={index}>
                <ListItemButton
                  sx={{
                    pl: open ? 4 : 2,
                    justifyContent: open ? "center" : "flex-start",
                    '&:hover': {
                      backgroundColor: 'blue' // Change this to the color you want
                    }
                  }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      </ListItem>
    </>
  );
}
