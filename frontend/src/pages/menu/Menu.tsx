import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

interface Menu {
  // id: number;
  name: string;
  price: number;
  // isArchived: boolean;
}

export const Menu = () => {
  const [menu, setMenu] = useState<Menu>({ name: "", price: 0 });

  const menus: Menu[] = [];

  // const getMenu = async () => {
  //   const response = await fetch("http://localhost:5000/menu");
  //   const data = await response.json();
  //   console.log(data);
  // };

  const createMenu = async () => {
    const response = await fetch("http://localhost:5000/menu", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(menu),
    });
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TextField
          placeholder="Name"
          sx={{ width: 350 }}
          onChange={(evt) => setMenu({ ...menu, name: evt.target.value })}
        ></TextField>
        <TextField
          placeholder="Price"
          sx={{ width: 350, mt: 2 }}
          onChange={(evt) =>
            setMenu({ ...menu, price: Number(evt.target.value) })
          }
        ></TextField>
        <Button
          variant="contained"
          onClick={createMenu}
          sx={{
            width: "fit-content",
            mt: 3,
          }}
        >
          Create Menu
        </Button>
      </Box>
    </Box>
  );
};
