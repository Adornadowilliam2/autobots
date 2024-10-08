import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { Menu, Close } from "@mui/icons-material"; // Use Material Icons

const Navbar = ({ data }) => {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <Link to="/">
        <h1>Autobots</h1>
      </Link>
      <IconButton
        onClick={toggleDialog}
        className="hamburger"
        style={{ color: "white" }}
      >
        <Menu />
      </IconButton>

      <Dialog open={open} onClose={toggleDialog} maxWidth="xs" fullWidth>
        <DialogTitle>
          Menu
          <IconButton
            onClick={toggleDialog}
            style={{ position: "absolute", right: 8, top: 8 }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/${item.name.toLowerCase()}`}
                  className="navbar-child"
                  onClick={toggleDialog}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
