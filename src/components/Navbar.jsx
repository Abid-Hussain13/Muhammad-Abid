import React, { useState } from "react";
import Siteicon from "/img/icon3.png";
import Siteicon2 from "/img/icon4.png";
import ModeBtn from "./ModeBtn";
import { useTheme } from "./context/ThemeContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Navbar() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  let image = theme === "dark" ? Siteicon : Siteicon2;

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/148BLG8D_Zd6EFlYN5BlyJ92PE7MQCaez/view?usp=drive_link",
      external: true,
    },
  ];

  return (
    <header className="ms-auto me-auto w-11/12">
      <nav className="flex items-center justify-between py-3">
        <div>
          <img className="w-12" src={image} alt="Site Icon" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden flex-row items-center space-x-1 text-sm md:flex">
          {navLinks.map((link, i) => (
            <a
              key={i}
              className="rounded px-2 py-1 text-black hover:bg-gray-400 dark:text-[#c9c0c0] dark:hover:bg-blue-950 dark:hover:text-zinc-50"
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
            >
              {link.label}
            </a>
          ))}
          <ModeBtn />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon className="text-black dark:text-white" />
          </IconButton>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="flex h-full w-60 flex-col space-y-3 p-4 dark:bg-gray-900">
          <div className="mb-4 flex items-center justify-between">
            <img className="w-10" src={image} alt="Site Icon" />
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon className="text-black dark:text-white" />
            </IconButton>
          </div>
          <List>
            {navLinks.map((link, i) => (
              <ListItem
                button
                key={i}
                component="a"
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                onClick={toggleDrawer(false)}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    className:
                      "text-black dark:text-[#c9c0c0] hover:text-blue-600",
                  }}
                />
              </ListItem>
            ))}
          </List>
          <ModeBtn />
        </div>
      </Drawer>
    </header>
  );
}

export default Navbar;
