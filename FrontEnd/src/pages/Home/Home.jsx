import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect, useState, useCallback } from "react";

import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { getLugares } from "../../services/api.services";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));
const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
export default function Home(props) {
  const [Lugares, setLugares] = useState();
  const [next, setNext] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  useEffect(() => {
    getLugares().then((data) => {
      setLugares(data.results);
      setNext(data.next);
    });
  }, []);
  const loadMore = () => {
    setLoadingMore(true);
    getLugares(next).then((data) => {});
  };
  // setLugares([...Lugares, ...data.results]);
  // setNext(data.next);
  // setLoadingMore(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log("refreshing");
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const renderItem = (item) => {
  //   const path = item.url.split("/");

  return (
    <ImageList sx={{ width: "100%", height: "100%" }}>
      <ImageListItem key="Subheader" cols={2}></ImageListItem>
      {/* {Lugares.map((item) => ( */}
        <ImageButton
          href="/details"
          focusRipple
          key={item.name}
          style={{
            width: "100%",
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${item.images})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {item.name}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))
      <Fab color="secondary" aria-label="add" href="/new">
        <AddIcon />
      </Fab>
    </ImageList>
//   );
// }

// const itemData = [
//   {
//     url: "https://www.elindependiente.com.ar/elindependiente/1.0/img/030886069.jpg",
//     title: "Sanagasta",
//     width: "100%",
//   },
//   {
//     url: "http://descubrirturismo.com/wp-content/uploads/2018/03/Iglesia-nuestra-se%C3%B1ora-del-rosario-chuquis.jpg",
//     title: "Chuquis",
//     width: "100%",
//   },
//   {
//     url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/88/0e/20/20151202-134935-largejpg.jpg?w=1200&h=-1&s=1",
//     title: "Famatina",
//     width: "100%",
//   },
//   {
//     url: "https://www.norte.com/img/2018/11/parque-nacional-talampaya.jpg",
//     title: "Talampaya",
//     width: "100%",
//   },
// ];
