import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { setTitle } from "../../redux/appRedux";
import NewForm from "../../components/NewForm";
import { Fab } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const New = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("New Place"));
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <NewForm />
        </Paper>
        <Grid item xs={2}>
          <Fab color="secondary" aria-label="add" href="/">
            <HomeIcon />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default New;
