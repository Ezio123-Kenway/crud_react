import CategoryIcon from "@mui/icons-material/Category";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Box
        sx={{
          height: 80,
          bgcolor: "lightgreen",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#4C4C6D",
          color: "#E8F6EF",
        }}
      >
        <Typography variant="h4">Foodie App</Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: 300,
            minHeight: "100vh",
            backgroundColor: "#1B9C85",
            borderTopRightRadius: 20,
          }}
        >
          <Link to={"/menu"} style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <MenuIcon sx={{ fontSize: 30, color: "#E8F6EF" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      fontSize: 20,
                      color: "#E8F6EF",
                    }}
                  >
                    Menu
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>
          <Link to={"/menuCategory"} style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon sx={{ fontSize: 30, color: "#E8F6EF" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: 20, color: "#E8F6EF" }}>
                    Menu Category
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>
        </Box>
        <Box sx={{ width: "100%", pl: 3, pt: 2 }}>{children}</Box>
      </Box>
    </Box>
  );
};
