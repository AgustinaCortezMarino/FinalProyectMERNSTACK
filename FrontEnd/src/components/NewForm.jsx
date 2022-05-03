import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const Input = styled("input")({
  display: "none",
});

const NewForm = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="name" label="Nombre del Lugar" variant="standard" />
      <TextField id="map" label="Ubicacion" variant="standard" />
      <TextField id="Lat" label="Latitud" variant="standard" />
      <TextField id="Long" label="Longitud" variant="standard" />
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton
          sx={{ justifyContent: "center", alignItems: "center" }}
          color="secondary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
      <Button
        variant="contained"
        color="secondary"
        endIcon={<CheckCircleRoundedIcon />}
      >
        Save
      </Button>
    </Box>
  );
};

export default NewForm;
