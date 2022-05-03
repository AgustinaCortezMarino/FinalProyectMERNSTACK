import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TablenDetails from "../../components/TablenDetails";
import { setTitle } from "../../redux/appRedux";
import { Fab } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Details = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Details"));
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <TablenDetails />
        </Paper>
        <Grid
          container
          spacing={6}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={2}>
            <Fab color="secondary" aria-label="add" href="/">
              <HomeIcon />
            </Fab>
          </Grid>
          <Grid item xs={2}>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </Grid>
          <Grid item xs={2}>
            <Fab color="secondary" aria-label="edit">
              <DeleteIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Details;
