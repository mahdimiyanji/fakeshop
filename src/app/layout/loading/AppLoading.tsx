import React from 'react';
import Backdrop from "@mui/material/Backdrop";
import {CircularProgress} from "@mui/material";

const AppLoading = () => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default AppLoading;